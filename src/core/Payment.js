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

	const onPurchase = () => {
		setInfo({loading: true})
		let nonce
		let getNonce = info.instance.requestPaymentMethod()
		.then(data => {
			nonce = data.nonce
			const paymentData  = {
				paymentMethodNonce: nonce,
				amount: getAmount()
			}
			processPayment(userId, token, paymentData)
			.then(response => {
				if (response.error) {
					if (response.code == '1') {
						alert("Payment Faild")
						signout(() => {
							return <Navigate to="/" />
						})
					}
				}else{
					setInfo({
						...info,
						success: response.success, loading: false
					})
					console.log("Payment Success")
					let product_names = ""
					products.forEach(function(item){
						product_names += item.names + ", "
					});
					const orderData = {
						products: product_names,
						transaction_id: response.transaction.id,
						amount: response.transaction.amount
					}
					createOrder(userId, token, orderData)
					.then(response => {
						if (response.error) {
							if (response.code == '1') {
								console.log("ORDER FAILD")
							}
							signout(() => {
								return <Navigate to="/" />
							})
						}else{
							if (response.success == true) {
								alert("Order Placed")
							}
						}
						
					})
					.catch(error => {
						setInfo({loading:false, success: false})
						console.log("order failed", error)
					})
					cartEmpty(() => {
						console.log("cart is empty")
					})
					setReload(!reload)
				}
				
			})
			.catch(e => console.log(e))
		})
		.catch(e => console.log("NONCE", e))
	}

	const showDropIn = () => {
		return (
			<div>
				{info.clientToken !== null && products.length > 0 ? (
					<div>
						<DropIn
							options={{ authorization: info.clientToken }}
							onInstance={(instance) => (info.instance = instance)}
						>
						</DropIn>
						<button onClick={onPurchase} className="btn btn-block btn-success">Place Order</button>
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
