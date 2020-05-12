/*global expect*/

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from ".";

describe("Route Component", () => {
  it("full app rendering/navigating", () => {
    const { container, getByText } = render(<App />);
    expect(container.innerHTML).toMatch("You are home");
    fireEvent.click(getByText(/about/i));
    expect(container.innerHTML).toMatch("You are on the about page");
  });
  
});