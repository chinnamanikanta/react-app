import React from "react";
import { observer, inject } from "mobx-react";
import { Redirect } from "react-router-dom";
import { observable, action } from "mobx";
import { withRouter } from "react-router-dom";

import { E_COMMERCE_PRODUCTS_PATH } from "../../constants/";
import { getAccessToken } from "../../constants/StorageUtils";
import SignInForm from "./SignInForm";



@inject("authStore")
@observer
class SignInRoute extends React.Component {
  @observable username = "";
  @observable password = "";
  @observable errorMessage = "";
  
  @action.bound
  onChangeUsername(e) {
    
    this.username = e.target.value;
  }


  @action.bound
  onChangePassword(e) {
    
    this.password = e.target.value;
  }


  onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onSubmitForm(e);
    }
  };


  onSignInSuccess = () => {
    const { history } = this.props;
    history.push(E_COMMERCE_PRODUCTS_PATH);
    
  };



  onSubmitForm = (e) => {
    

    const { userSignIn } = this.props.authStore;
        e.preventDefault();
    if (this.username === "" || this.username === undefined) {
        this.errorMessage = "Please enter username";
        return;
    } else if (this.password === "" || this.password === undefined) {
        this.errorMessage = "Please enter password";
        return;
    } else {
        this.errorMessage = "";
        
        userSignIn(
          {
            username: this.username,
            password: this.password,
          },
            this.onSignInSuccess
      );
      
    }
  };

  renderProductsPage = () => {
    return <Redirect to={E_COMMERCE_PRODUCTS_PATH} />;
  };

  
  render() {
    const {
      authStore: { getUserSignInAPIStatus },
    } = this.props;
   
    if (getAccessToken()) {
      return this.renderProductsPage();
    }

    return (
      
      <SignInForm
        apiStatus={getUserSignInAPIStatus}
        errorMessage={this.errorMessage}
        username={this.username}
        password={this.password}
        onChangeUsername={this.onChangeUsername}
        onChangePassword={this.onChangePassword}
        onSubmitForm={this.onSubmitForm  }
        onEnterKeyPress={this.onEnterKeyPress}
      />
    );
  }
}

export default withRouter(SignInRoute);