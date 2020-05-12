import React from "react";
/*global jest*/
/*global expect*/
import {Provider} from 'mobx-react';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { Router, Route } from "react-router-dom";

import { createMemoryHistory } from "history";

import AuthAPI from "../../AuthServices/AuthAPI";

import AuthStore from "../../AuthStore/AuthStore";

import getUserSignInResponse from "../../fixture/getUserSignInResponse";

import SignInRoute from "./SignInRoute";

import {E_COMMERCE_SIGN_IN_PATH, E_COMMERCE_PRODUCTS_PATH } from '../../constants/';

import ProductsMainPage from '../../../E-Commerce/components/ProductPage/ProductMainPage/ProductMainPage'

describe("SignInRoute Tests", () => {
  let authAPI;
  let authStore;

  beforeEach(() => {
    authAPI = new AuthAPI();
    authStore = new AuthStore(authAPI);
  });
  
  afterEach(() => {
    jest.resetAllMocks();
    
  });
  
  
  
  
  it("should render username empty error message", () => {
    const { getByText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const signInButton = getByRole("button", { name: "Sign in"});
    
    fireEvent.click(signInButton);

    getByText(/Please enter username/i);
  });

  it("should render password empty error message", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const usernameField = getByPlaceholderText("Username");
    const signInButton = getByRole("button", { name: "Sign in" });

    fireEvent.change(usernameField, { target: { value: username } });
    
    fireEvent.click(signInButton);

    getByText(/Please enter password/i);
  });

  it("should submit sign-in form on press enter", () => {
    const { getByLabelText, getByPlaceholderText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const password = "test-password";

    const usernameField = getByPlaceholderText("Username");
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByRole("button", { name: "Sign in" });

    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });
  });



  it("should render signInRoute success state", async () => {
    const history = createMemoryHistory();
    const route = E_COMMERCE_SIGN_IN_PATH;
    history.push(route);

    const {
      getByPlaceholderText,
      getByRole,
      queryByRole,
      queryByLabelText,
      getByTestId,
    
    } = render(
      <Provider >
        <Router history={history}>
          <Route path={E_COMMERCE_SIGN_IN_PATH}>
            <SignInRoute authStore={authStore}/>
          </Route>
          <Route path={E_COMMERCE_PRODUCTS_PATH}>
            <ProductsMainPage />
          </Route>
        </Router>
      </Provider>
    );

    const username = "test-user";
    const password = "test-password";
    
    const usernameField = getByPlaceholderText("Username");
   
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByRole("button", { name: "Sign in" });

    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUserSignInResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.signInAPI = mockSignInAPI;

    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.click(signInButton);

    waitFor(() => {
      expect(
        queryByRole("button", { name: "Sign in" })
      ).not.toBeInTheDocument();
      expect(getByTestId("product-page")).toHaveTextContent(
        E_COMMERCE_PRODUCTS_PATH
      );
      
    });
});
});