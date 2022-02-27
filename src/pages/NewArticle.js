import React from 'react'
import logo from '.././images/publish.svg'
import styled from 'styled-components'
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Header from '../components/Header';
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

const ImgWrap = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`
const TextWrap = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`
const NewArticle = () => {
    return (
        <>
            <Container1>
                <Header />
                <Elements>
                    <ImgWrap>
                        <img
                            src={logo}
                            width="250"
                            height="200"
                        /></ImgWrap>
                    <br />
                    <TextWrap>
                        <h3>New Article</h3>
                    </TextWrap><br />
                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <Input
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Description</label>
                            <TextArea/>
                        </Form.Field>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button primary style={{ backgroundColor: "#E85A45" }}>
                                Publish
                            </Button>
                        </div>
                    </Form>
                </Elements>
                <Footer />
            </Container1>
        </>
    )
}

export default NewArticle