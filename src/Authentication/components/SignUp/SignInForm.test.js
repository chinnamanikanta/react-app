import React from "react";
/*global expect*/
import { render } from "@testing-library/react";

import SignInForm from "./SignInForm";

describe("SignInForm", () => {
  it("should render typed username", () => {
    const username = "test-user";
    const { getByPlaceholderText } = render(
      <SignInForm username={username} onChangeUsername={() => {}} />
    );
    const usernameField = getByPlaceholderText("Username");
    expect(usernameField.value).toBe(username);
  });
  it("should render typed password", () => {
    const password = "test-password";
    
    const { getByPlaceholderText } = render(
      <SignInForm password={password} onChangePassword={() => {}} />
    );
  });
  
it("should render given error message", () => {
    const { getByText } = render(
      <SignInForm errorMessage="Invalid username" />
    );
    getByText(/Invalid username/i);
  });
  
});