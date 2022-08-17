import React, { Component } from "react"
import {Routes,  Navigate} from "react-router-dom"
import { isAuthenticated } from "."



const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
      <Routes
        {...rest}
        render={(props) =>
          isAuthenticated()
            ? (
              <Component {...props} />
            )
            : (
              <Navigate
                to={{
                  pathname: "/signin",
                  state: { from: props.location },
                }}
              />
            )}
      />
    );
  };

export default PrivateRoutes