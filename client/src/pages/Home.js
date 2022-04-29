import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import logo from '.././images/soochna.svg';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import {Article,web3} from '../Article'


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
const Welcomeline=styled.h1`
    color: #E85A45;
    font-weight: 500;
    font-size: 30px;
    margin-top : 15px
`
const Home = () => {

    const [name,setName] = useState('');
    const [role,setRole] = useState('');


    const handleChange = async() => {
        let accounts = await web3.eth.getAccounts();
        const role = await Article.methods.getRole().call({from : accounts[0]})
        setRole(role)
        let userDetail = await Article.methods.userDetail().call({from : accounts[0]})
        setName(userDetail[1])
      }

      const displayRole = () => {
        console.log("ROLE",role)
        if(role === '0'){
            return (
                <div>
                <Link to="/registerUser">
                <Button>Register as User</Button>
                </Link>
                   
                    or
                    <Link to="/registerJourn">
                    <Button>Register as Journalist</Button>
                    </Link>
                </div>
            )
        }
        else {
            return (
                <div>Welcome back {name}</div>
            )
        }
    }


    useEffect(()=> {
        handleChange()
    })
   
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
            <Link to="/Explore">
                <Button  style={{ backgroundColor: "#E85A45" }} primary>
                    Explore
                </Button>
            </Link>

            {role=== '1' && 
            <Link to='/Publish'>
            <Button>Publish</Button>
            </Link>
           }
            
                 

            <Welcomeline>{displayRole()}</Welcomeline>

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