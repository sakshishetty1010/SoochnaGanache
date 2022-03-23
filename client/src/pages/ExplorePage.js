import React, { useEffect ,useState} from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Card,CardGroup} from 'react-bootstrap';
import Footer from '../components/Footer';
import {Article,web3} from '../Article'


const news = [{ id: "0", title: "gdhasjd" }, { id: "1", title: "vjdjacjr" }, { id: "2", title: "bvhvcvwejw" }]

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


const ExplorePage = () => {
  const [allnews,setNews] = useState([]);

  useEffect(()=>{
    const loadData = async ()=>{
      try {
        const count = await Article.methods.getPostCount().call();
        let news = []
        for(let i = 0; i<count ; i++){
          const n = await Article.methods.getPosts(i).call();
        //  console.log(n);
          news.push(...news,{
            id: n[0],
            upVotes: n[1],
            downVotes: n[2],
            title: n[3],
            description: n[4],
            author: n[5],
          })

       
        }
      //  console.log("News",news);
       setNews(news);
      } catch (error) {
        console.log(error)
      }
    }
    loadData();
   
  },[])


  return (
    <>
      <Container1>
        <Header />
        <Elements>
        {allnews.map((n) => {
            return (
              <>
                <Link to={`/Explore/${n.id}`} style={{textDecoration:"none",color:"black"}}>

              
               <CardGroup style={{marginTop:"10px"}}>
                  <Card style={{ width: '18rem',borderRadius:"20px" }}>
                    <Card.Body>
                      <Card.Title >{n.title}</Card.Title>
                      
                    </Card.Body>
                  </Card>
                  </CardGroup>
                </Link>
              </>
            );
          })}
             
        </Elements>
        <Footer />
      </Container1>
    </>
  )
}

export default ExplorePage