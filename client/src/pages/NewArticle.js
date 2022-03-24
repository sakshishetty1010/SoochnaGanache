import React, { useState } from "react";
import logo from ".././images/publish.svg";
import styled from "styled-components";
import { Form, Input, TextArea, Button,Message } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Article, web3 } from "../Article";
import { useNavigate } from "react-router-dom";
import {create} from 'ipfs-http-client'
const client = create('https://ipfs.infura.io:5001/api/v0');


const Container1 = styled.body`
  background: #eae7dc;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Elements = styled.section`
  padding: 50px;
  padding-bottom: 60px;
  height: 100%;
  flex: 1;
`;

const ImgWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;
const TextWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;
const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const[file,setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  let hash 
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const created = await client.add(file);
      hash = created.path
      const accounts = await web3.eth.getAccounts();
      console.log(accounts)
      await Article.methods
        .addPost(title,description,hash)
        .send({from: accounts[0] });
        history('/')

    } catch (error) {
        setErrorMessage(error.message)
    }
    setLoading(false);
  };

  const captureImage = (event)=>{
       
        
    const data = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
        setFile(Buffer(reader.result));
    }

    event.preventDefault();

}
  return (
    <>
      <Container1>
        <Header />
        <Elements>
          <ImgWrap>
            <img src={logo} width="250" height="200" />
          </ImgWrap>
          <br />
          <TextWrap>
            <h3>New Article</h3>
          </TextWrap>
          <br />
          <Form onSubmit={onSubmit} error={!!errorMessage}>
            <Form.Field>
              <label>Title</label>
              <Input 
                  value={title}
              onChange={(event) => setTitle(event.target.value )}
              />
            </Form.Field>

            <Form.Field>
              <label>Description</label>
              <TextArea 
                  value={description}
              onChange={(event) => setDescription( event.target.value)}
              />
            </Form.Field>

            <Form.Field>
                    <label>Upload Songfile</label>
                    <input type="file" onChange={captureImage} />
                </Form.Field>
            <Message error header="OOPS!" content={errorMessage} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button  loading={loading} primary style={{ backgroundColor: "#E85A45" }}>
                Publish
              </Button>
            </div>
          </Form>
        </Elements>
        <Footer />
      </Container1>
    </>
  );
};

export default NewArticle;
