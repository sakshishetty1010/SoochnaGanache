import React from 'react'
import styled from 'styled-components'
import {MdCopyright} from 'react-icons/md'

 const FooterContainer= styled.footer`
  padding:30px 28px;
  background-color:#e85a45;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  width:100%;

`

const FooterItems=styled.div`
    color:#000;
    padding:5px;
`

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterItems>
       Created by Sakshi, Sania and Jesica<MdCopyright/> 2022 
        
        </FooterItems>
    </FooterContainer>
    </>
  )
}

export default Footer