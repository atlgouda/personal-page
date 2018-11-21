import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'


const MainHeader = styled.div`
  
  background-color: #9DE0AD;
  color: #594F4F;
  height: 40vh;
  padding-top: 40px;
  padding-bottom: 30px;
  width: 100%;
    >h1 {
      font-size: 50px;
    }
  @media (max-width: 800px) {
    padding-top: 5px;
    padding-bottom: 60px;
    text-align: center;
    width: 100%;
  }

`

const GoudaName = styled.div`
    float: left;
    padding-left: 15%;
    padding-right: 5%;
    font-size: 25px;
    >h4 {
      font-size: 3vh;
    };
    @media (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    float: none;
    font-size: 15px;
  }
 `

const GoudaImage = styled.img`
  float: right;
  margin-right: 15%;
  border-radius: 20px;
  width: 30vw;
  max-width: 250px;
  min-width: 150px;
  @media (max-width: 808px) {
    margin-right: 0;
    float: none;
    text-align: center;
    max-width: 150px;
  }
`


export default class Header extends Component {
  render() {
    return (
      <div>
      <MainHeader>
               <GoudaName><h1>Gouda Clark</h1>
               <h4>Full Stack Web Developer</h4>
               </GoudaName>

               <GoudaImage src="https://i.imgur.com/2qp4xegb.jpg" />
               <br></br>
              
      </MainHeader>

      </div>
    )
  }
}
