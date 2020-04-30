import React from 'react';
import styled from '@emotion/styled';
import {withRouter } from 'react-router-dom';
import tw from 'tailwind.macro';
import {ACCESS_TOKEN} from '../../constants/StorageUtils.js'

const SignInPage = styled.div`${tw`bg-blue-100 w-screen h-screen flex flex-col justify-center items-center`}`;
const SignInBox = styled.div`
width:250px;
height:260px;
background-color:white;
display:flex;
flex-direction:column;
justify-content:space-evenly;
`;
const SignInTitle = styled.div`
font-size:20px;
margin:15px;
`;
const SignInInputs = styled.div`
`;

const SignInButtons = styled.button`
background-color:black;
color:white;
width:221px;
height:40px;
text-align:center;
margin:15px;
`;

class SignInECommercePage extends React.Component {
    
    state={
    userName:"",
    password:"",
   
  }
  onHandle=(event)=>{
    this.setState({userName:event.target.value})
  }
  onHandle1=(event)=>{
    this.setState({password:event.target.value});
  }
  onAddClick=(event)=>{

         if(ACCESS_TOKEN.length > 0) {
              this.props.history.replace({pathname:'/product-page'})
         }
         else {
             this.props.history.push({pathname:'/user-login'});
         }
  }
   render(){
        return (
            <SignInPage>
            <SignInBox>
            <SignInTitle>SignIn</SignInTitle>
            <SignInInputs>
            <input placeholder="userName" type="text"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 m-3 leading-tight focus:outline-none focus:shadow-outline"
            
            ></input>
          
            
            <input placeholder="password" type="password"
            
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 m-3 leading-tight focus:outline-none focus:shadow-outline"
            
            ></input>
             
            </SignInInputs>
            <SignInButtons onClick={this.onAddClick}>SignIn</SignInButtons>
                        
            </SignInBox>
            
            </SignInPage>

            )
    }
}

export default withRouter(SignInECommercePage);