// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.0;


contract Article{
    
    
    struct Post{
        uint id;
        string title;
        string description;
        uint upVotes;
        uint downVotes;
        uint tipAmount;
        address payable author;
        
    }



    Post[] public posts;

  

    function addPost(string memory _title,string memory _description) public{
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

    }

    function upVotePost(uint postId) public{
        posts[postId].upVotes++;
    }

    function downVotePost(uint postId) public{
        posts[postId].downVotes++;
    }

    function getPosts(uint postId) public view returns(uint, uint, uint, string memory, string memory, address ) {
       Post storage p = posts[postId];
       return (p.id, p.upVotes, p.downVotes,p.title, p.description,p.author);
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