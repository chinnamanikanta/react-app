import React from "react";
import { Route } from "react-router-dom";

import SIGN_IN_PAGE from '../constants/';
import SignInECommercePage from '../components/SignUp/SignUp';

const routes = [
    
  <Route path={SIGN_IN_PAGE} component={SignInECommercePage} />,
  
];

export default routes;
