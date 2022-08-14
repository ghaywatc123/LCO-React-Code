import React, { Component } from "react"
import {Routes,  Navigate} from "react-router-dom"
import { isAuthenticated } from "."



const PrivateRoutes = ({children, ...rest})=> {
    return (
        <Routes>
            {...rest}
            render = {({location}) => 
                fakeAuth.isAuthenticated ? (
                    <Element {...props} />
                ) : (
                    <Navigate 
                        to={{pathname: "/login",
                        state: {from : props.location},
                        }}
                    />
                )
            }
        </Routes>
    ) 
}