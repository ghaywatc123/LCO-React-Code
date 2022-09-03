import React from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import {signout, isAuthenticated} from "../auth/helper/index"



let location = useLocation;
 const currentTab = (path) => {
    if (location.pathname===path) {
        return {color: '#2ecc72'}
    } else {
        return {color: '#ffffff'}
    }
 }

 const Menu = ({path}) => {
  
  return (
		<div>
			<ul className="nav nav-tabs bg-dark">
				<Link style={currentTab("/")} className="nav-link" to="/">
					Home
				</Link>
				<li className="nav-item">
					<Link className="nav-link" to="/signin" style={currentTab("/signin")}>
						Signin
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/cart" style={currentTab("/cart")}>
						Cart
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/user/dashboard" style={currentTab("/user/dashboard")}>
						Dashboard
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/signup" style={currentTab("/signup")}>
						Signup
					</Link>
				</li>
				<li className="nav-item">
					<span
						className="nav-link text-warning"
						onClick={() => {
							signout(() => {
								navigate("/"); //updated
							});
						}}					>
						Signout
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
