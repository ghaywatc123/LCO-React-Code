import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { createOrder } from "./helper/orderHelper";
import { getmeToken, processPayment } from "./helper/paymentHelper";
import { cartEmpty } from "./helper/cartHelper";
import { isAuthenticated, signout } from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";

const Payment = ({ products, reload = undefined, setReload = (f) => f }) => {
	const [info, setInfo] = useState({
		loading: false,
		success: false,
		clientToken: null,
		error: "",
		instance: {},
	});
	const userId = isAuthenticated && isAuthenticated().user.id;
	const token = isAuthenticated && isAuthenticated().token;

	const getToken = (userId, token) => {
		getmeToken(userId, token).then((info) => {
			if (info.error) {
				setInfo({
					...info,
					error: info.error,
				});
				signout(() => {
					return <Navigate to="/" />;
				});
			} else {
				const clientToken = info.clientToken;
				setInfo({ clientToken });
			}
		});
	};

	useEffect(() => {
		getToken(userId, token);
	}, []);

	const getAmount = () => {
		let amount = 0;
		products.map((p) => {
			amount = amount + parseFloat(p.price);
		});
		return amount;
	};

	const showDropIn = () => {
		return (
			<div>
				{info.clientToken !== null && products.length > 0 ? (
					<div>
						<DropIn
							options={{ authorization: info.clientToken }}
							onInstance={(instance) => (info.instance = instance)}
						>
							<button className="btn btn-block btn-success">Logout</button>
						</DropIn>
					</div>
				) : (
					<h3>Please Login First</h3>
				)}
			</div>
		);
	};

	return (
		<div>
			<h3>your total product amount is {getAmount()}</h3>
			{showDropIn()}
		</div>
	);
};

export default Payment;
