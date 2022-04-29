import React,{useState,useEffect} from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Article, web3 } from "../Article";
import {Link} from 'react-router-dom'

const Header = () => {
   

    return (
            <Navbar collapseOnSelect expand="sm" style={{backgroundColor:"#e85a45"}} variant="light" >
               
                <Container>
                  
                <Navbar.Brand>Soochna</Navbar.Brand>
                
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mr-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                 
                            <Nav.Link href='/Explore'>News</Nav.Link>
                         
                           
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar> 
            
      
        );
};

export default Header;