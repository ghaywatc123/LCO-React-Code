import React, { Component } from "react"
import {Routes,  Navigate} from "react-router-dom"
import { isAuthenticated } from "."



const PrivateRoutes = ({ component: Component, ...rest }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
  };

export default PrivateRoutes