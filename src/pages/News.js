import React from 'react'
import styled from 'styled-components';
import { Button, ButtonGroup, Form, Input } from 'semantic-ui-react';
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

const News = () => {
    return (
        <>
            <Container1>
                <Header />
                <Elements>
                    <div>
                        <i>Published by : sania</i>
                    </div>
                    <h3>Title</h3>
                    <br />
                    <ButtonGroup>
                        <Button> Upvotes</Button>
                        <Button>Downvotes</Button>
                    </ButtonGroup>

                    <h3><p>description</p></h3>
                    <Form>
                        <Form.Field>
                            <label>TIP AUTHOR</label>
                            <Input/>
                        </Form.Field>

                        <Button style={{ backgroundColor: "#E85A45" }} primary>
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