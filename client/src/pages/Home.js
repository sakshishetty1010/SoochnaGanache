import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import logo from '.././images/soochna.svg';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
 const HomeWrapper=styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    margin:0 auto;
    padding: 0 24px;
    justify-content:center;
`
const HomeRow=styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas:${({imgStart}) => (imgStart ? `'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas:${({imgStart}) => (imgStart ? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    }
    
`
 const Column1=styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1;
`
 const Column2=styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col2;
`
const Topline=styled.h1`
    color: #E85A45;
    font-weight: 800;
    font-size: 70px;
`
const BootomLine=styled.p`
    color: black;
    font-size: 30px;
`
const Home = () => {
  return (
    <>
    <Container1>
        <Header />
    <Elements>
        <HomeWrapper>
        <HomeRow>
            <Column1>
            <Topline>Soochna</Topline>
            <BootomLine>A website where you can read news and tip the journalist</BootomLine>
            <Link to="/Explore"><Button  style={{ backgroundColor: "#E85A45" }} primary>
                            Explore
                        </Button></Link>
            </Column1>
            <Column2>
            <img src={logo} width="70%" height="70%" />
            </Column2>
        </HomeRow>
        </HomeWrapper>
    </Elements>
    <Footer />
    </Container1>
    </>
  )
}

export default Home