import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ path }) => {
	let location = useLocation();

	const currentTab = (path) => {
		if (location.pathname === path) {
			return { color: "#2ecc72" };
		} else {
			return { color: "#FFFFFF" };
		}
	};

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
			</ul>
		</div>
	);
};

export default Menu;
