import React from "react";
import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";

import Home from "./core/Home";

import PrivateRoutes from "./auth/helper/PrivateRoutes"
import Signup from "./user/signup";

import UserDashboard from "./user/userdashboard"

const Routess = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/signup" element={<Signup/>} />
                {<PrivateRoutes path="/user/dashboard" exact element={<UserDashboard />}/>}
                {/*<Route path="user/dashboard" element= {<PrivateRoutes> <UserDashboard/> </PrivateRoutes>} />*/}
            </Routes>
        </BrowserRouter>
    );
};

export default Routess;
