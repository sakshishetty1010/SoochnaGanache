// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.0;


contract Article{
    
    address public owner;
    uint public lastUser;
     uint public lastArtist;

    struct Post{
        uint id;
        string title;
        string description;
        uint upVotes;
        uint downVotes;
        uint tipAmount;
        string imgHash;
        address payable author;
        
    }
    struct User{
        uint uId;
        string name;
    }

     struct Artist{
        uint aId;
        uint uId;
        address payable artistAddress;
        string name;
        uint[] songsUploaded;
    }

    enum ROLE{UNREGISTERED,ARTIST,USER}      //keep track of type of user

    mapping(uint => Artist) idToArtist;
    mapping(address => uint)artistId;
    mapping (address => User) userId;

    modifier onlyUser{
        require(userId[msg.sender].uId != 0,"Not a user");
        _;
    }

    modifier onlyArtist{
        require(artistId[msg.sender] !=0,"Not an artists");
        _;
    }

    constructor() public{
        owner = msg.sender;
        lastArtist = 0;
        lastUser = 0;
    }

     function getRole() external view returns(ROLE) {
        return ((artistId[msg.sender]!=0) ? ROLE.ARTIST : (userId[msg.sender].uId != 0) ? ROLE.USER : ROLE.UNREGISTERED);
    }

     function userRegister(string memory name) public{
        lastUser+=1;
        User memory newUser = User(lastUser,name);
       userId[msg.sender] = newUser;
    }

    function artistRegister(string calldata _name) external payable{
        require(msg.value == 0.05 ether, "Artist Registration fee");
        require(artistId[msg.sender] == 0,"Already register");
        lastArtist++;

        //every artists is also a user
        if(userId[msg.sender].uId == 0){
            userRegister(_name);
        }

        Artist memory newArtist = Artist(lastArtist,userId[msg.sender].uId,msg.sender,_name,new uint[](0));
        artistId[msg.sender] = lastArtist;
        idToArtist[lastArtist] = newArtist;
    }

    function isBadge(uint upvote) public view returns(uint){
        if(upvote > lastUser/2)return 1;
        else return 0;
    }

 function userDetail() external view returns(uint,string memory){
        return (userId[msg.sender].uId,userId[msg.sender].name);
    }


    Post[] public posts;

  

    function addPost(string memory _title,string memory _description,string memory _img) public{
       posts.length++;
        // Make sure image description exists
        require(bytes(_description).length > 0);
        // Make sure image title exists
        require(bytes(_title).length > 0);
        Post storage p = posts[posts.length - 1];
        p.id = posts.length - 1;
        p.author = msg.sender;
        p.upVotes = 0;
        p.downVotes = 0;
        p.tipAmount =0;
        p.title = _title;
        p.description = _description;
        p.imgHash = _img;

    }

    function upVotePost(uint postId) public{
        posts[postId].upVotes++;
    }

    function downVotePost(uint postId) public{
        posts[postId].downVotes++;
    }

    function getPosts(uint postId) public view returns(uint, uint, uint, string memory, string memory, address ,string memory) {
       Post storage p = posts[postId];
       return (p.id, p.upVotes, p.downVotes,p.title, p.description,p.author,p.imgHash);
    }

    function getPostCount() public view returns(uint){
        return posts.length;
    }

    function tipArticleOwner(uint id) public payable{
        //make sure author is valid
       require(id>=0);
        //f+etch the post
        Post memory _post = posts[id];
        //fetch the author
        address payable _author = _post.author;
        //pay the author by sending the ether
        address(_author).transfer(msg.value);
        _post.tipAmount = _post.tipAmount+msg.value;
        posts[id] = _post;

    }

}