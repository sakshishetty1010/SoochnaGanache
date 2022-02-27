import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Card,CardGroup} from 'react-bootstrap';
import Footer from '../components/Footer';


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
  return (
    <>
      <Container1>
        <Header />
        <Elements>
          {news.map((n) => {
            return (
              <>
                <Link to={`/Explore/${n.id}`} style={{textDecoration:"none",color:"black"}}>

              
               <CardGroup style={{marginTop:"10px"}}>
                  <Card style={{ width: '18rem',borderRadius:"20px" }}>
                    <Card.Body>
                      <Card.Title >{n.title}</Card.Title>
                      
                      <Card.Text>
                        {n.id}
                      </Card.Text>
                      
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