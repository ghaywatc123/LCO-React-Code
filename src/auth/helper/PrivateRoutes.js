import React from "react"
import {Routes,  Navigate, Outlet, Component} from "react-router-dom"
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
return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes 