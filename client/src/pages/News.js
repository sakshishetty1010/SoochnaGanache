import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { Message,Button, ButtonGroup, Form, Input } from 'semantic-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Article,web3} from '../Article'
import { useParams,useNavigate } from 'react-router-dom';

const Container1 = styled.body`
  background:#EAE7DC;
  width:100%;
position:relative;
  display:flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Elements = styled.section`
 padding:50px;
 padding-bottom:60px;
 height:100%;
 flex:1;
`;

const News = () => {
    const {id} = useParams();
    const [article,setArticle] = useState({});
    const [value,setValue] = useState('')
    const [loading,setLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const history = useNavigate()
  
    useEffect(()=>{

        const loadData = async () =>{
            const n = await Article.methods.getPosts(id).call();
            const a = {
                id: n[0],
                upVotes: n[1],
                downVotes: n[2],
                title: n[3],
                description: n[4],
                author: n[5],
            }
            setArticle(a);
        }
      
        loadData()
       
    
    },[])

    const increaseUpvote = async () =>{
        const accounts = await web3.eth.getAccounts();
        await Article.methods.upVotePost(id).send({
            from: accounts[0],
          });
         history(`/Explore/${id}`); 
    }

    const decreaseDownvote = async () =>{
        const accounts = await web3.eth.getAccounts();
        await Article.methods.downVotePost(id).send({
            from: accounts[0],
          });
         history(`/Explore/${id}`); 
    }

    const onSubmit = async(event)=>{
       event.preventDefault();
       setErrorMessage("")
       setLoading(true)

       try {
           const accounts = await web3.eth.getAccounts();
           await Article.methods.tipArticleOwner(id).send({
            from: accounts[0],
            value: web3.utils.toWei(value, "ether"),
          });
          history(`/Explore/${id}`)
       } catch (error) {
           setErrorMessage(error.message)
       }
       setLoading(false)
       setValue('')
    }
    return (
        <>
            <Container1>
                <Header />
                <Elements>
               
                    <div>
                        <i>Published by : {article.author}</i>
                    </div>
                    <h3>{article.title}</h3>
                    <br />
                    <ButtonGroup>
                        <Button onClick={increaseUpvote}> {article.upVotes} Upvotes</Button>
                        <Button onClick={decreaseDownvote}>{article.downVotes} Downvotes</Button>
                    </ButtonGroup>

                    <h3><p>{article.description}</p></h3>
                    <Form onSubmit = {onSubmit} error = {!!errorMessage}>
                        <Form.Field>
                            <label>TIP AUTHOR</label>
                            <Input
                                value={value}
                                onChange = {e => setValue(e.target.value)}
                                label="ether"
                                labelPosition = "right"
                            />
                        </Form.Field>
                        <Message
                        error
                        header="OOPS!"
                        content={errorMessage}
                        ></Message>

                        <Button loading={loading} style={{ backgroundColor: "#E85A45" }} primary >
                            Contribute!
                        </Button>
                    </Form>
                </Elements>
                <Footer />
            </Container1>
        </>
    )
}

export default News