import React from 'react';
// const SignInPage = styled.div`${tw`bg-blue-100 w-screen h-screen flex flex-col justify-center items-center`}`;
// const SignInBox = styled.div`
// width:250px;
// height:260px;
// background-color:white;
// display:flex;
// flex-direction:column;
// justify-content:space-evenly;
// `;
// const SignInTitle = styled.div`
// font-size:20px;
// margin:15px;
// `;
// const SignInInputs = styled.div`
// `;

// const SignInButtons = styled.button`
// background-color:black;
// color:white;
// width:221px;
// height:40px;
// text-align:center;
// margin:15px;
// `;

// class SignInECommercePage extends React.Component {
    
//     state={
//     userName:"",
//     password:"",
   
//   }
//   onHandle=(event)=>{
//     this.setState({userName:event.target.value})
//   }
//   onHandle1=(event)=>{
//     this.setState({password:event.target.value});
//   }
//   onAddClick=(event)=>{

//          if(ACCESS_TOKEN.length > 0) {
//               this.props.history.replace({pathname:'/product-page'})
//          }
//          else {
//              this.props.history.push({pathname:'/user-login'});
//          }
//   }
//   render(){
//         return (
//             <SignInPage>
//             <SignInBox>
//             <SignInTitle>SignIn</SignInTitle>
//             <SignInInputs>
//             <input placeholder="userName" type="text"
//             className="shadow appearance-none border rounded py-2 px-3 text-gray-700 m-3 leading-tight focus:outline-none focus:shadow-outline"
            
//             ></input>
          
            
//             <input placeholder="password" type="password"
            
//             className="shadow appearance-none border rounded py-2 px-3 text-gray-700 m-3 leading-tight focus:outline-none focus:shadow-outline"
            
//             ></input>
             
//             </SignInInputs>
//             <SignInButtons onClick={this.onAddClick}>SignIn</SignInButtons>
                        
//             </SignInBox>
            
//             </SignInPage>

//             )
//     }
// }

class SignInForm extends React.Component {
  render() {
    const {
      apiStatus,
      username,
      onChangeUsername,
      password,
      onChangePassword,
      onEnterKeyPress,
      onSubmitForm,
      errorMessage,
    } = this.props;
    
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form className="flex flex-col p-10 bg-white">
          <h2 className="font-bold mb-4">Sign in</h2>
          <input
            type="text"
            value={username}
            onChange={onChangeUsername}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Password"
            onKeyPress={onEnterKeyPress}
          />
          <button
            onClick={onSubmitForm}
            className="flex justify-center w-48 h-10 rounded bg-gray-900 text-white"
            apiStatus={apiStatus}
            onKeyPress={onEnterKeyPress}
            role="button"
          >Sign in</button>
          
          {errorMessage !== "" && errorMessage !== undefined ? (
            <span className="text-red-700 mt-2 w-48 text-sm">
              {errorMessage}
            </span>
          ) : null}
        </form>
      </div>
    );
  }
}

export default SignInForm;




export default withRouter(SignInECommercePage);