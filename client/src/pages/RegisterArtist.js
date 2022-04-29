import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {Form, Message,Input,Button, Container,Card} from 'semantic-ui-react'
import {Article,web3} from '../Article'


const RegisterArtist = () => {

  const[open,setOPen] = useState(false)
  const [role,setRole] =  useState('');
  const[loading,setLoading] = useState(false)
  const[errorMessage,setErrorMessage] = useState('');
  const[name,setName] = useState('');
  const[msg,setMessage] = useState('');
  const navigate = useNavigate();


  const onSubmit = async(e) => {
      e.preventDefault()
      setErrorMessage();
      setLoading(true);
      setMessage('')
      try {
         let accounts = await web3.eth.getAccounts();
         const role = await Article.methods.getRole().call({from : accounts[0]}) ;

         if(role === '0'){
             if(name === '')setErrorMessage("Kindly enter your name")
             else{
                 await Article.methods.artistRegister(name).send({from: accounts[0],value: web3.utils.toWei('0.05','ether')});
                

             }
         }
         navigate('/')
      } catch (error) {
         setErrorMessage(error.message) 
      }
  }
  return (
    <div >
  
  
  <Container style={{marginTop:"50px",border:'1px solid',padding:'10px',height:'150px',background:'#fff',borderRadius:'10px'}}>
    <Form onSubmit={onSubmit} error={!!errorMessage}>
    <Form.Field >
      <label>Name</label>
      <Input onChange={event =>setName(event.target.value)} />
    </Form.Field>
  
     
      <Form.Field>
      <Button basic floated='left' loading={loading} disabled={loading}>
        Register as Jounalist
      </Button>
      </Form.Field>

    <Message error header="Oops!" content={errorMessage} />
  
  </Form>
  </Container>
  
  </div>
  )
}

export default RegisterArtist