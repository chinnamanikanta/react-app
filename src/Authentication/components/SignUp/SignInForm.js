import React from "react";
import {observer} from 'mobx-react';

const DisplayMessage = (props) => {
  return <div>{props.children() }</div>
}

@observer
class SignInForm extends React.Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  componentDidMount(){
    this.usernameRef.current.focus();
  }
  render() {
    const {
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
            ref = {this.usernameRef}
              type="text"
              placeholder="Username"
              value={username}
              onChange={onChangeUsername}
              className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
              onKeyPress = {onEnterKeyPress}
          />
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
              className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
              onKeyPress={onEnterKeyPress}
          />
          <button
            onClick={onSubmitForm}
            type="button"
            className="flex justify-center w-48 h-10 rounded bg-gray-900 text-white"
            
            role="button"
          >Sign in</button>
          
          {errorMessage !== "" && errorMessage !== undefined ? (
            <span className="text-red-700 mt-2 w-48 text-sm">
              {errorMessage}
            </span>
          ) : null}
        </form>
        <DisplayMessage>{()=> <div>mani</div>}</DisplayMessage>
      </div>
    );
  }
}

export default SignInForm;
