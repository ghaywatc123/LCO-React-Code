import React from "react";
import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";

import Home from "./core/Home";

import PrivateRoutes from "./auth/helper/PrivateRoutes"
import Signup from "./user/signup";

const Routess = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/signup" element={<Signup/>} />
                {/*<PrivateRoutes path="/user/dashboard" element={}/>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default Routess;
