import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import {Navigate} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";




const Card = ({
  product,
  addtoCart = true,
  removeFromCart= true,
  reload = undefined,
  setReload = f => f,
}) => {

  const [redirect, setRedirect] = useState(false)

  const cartTitle = product ? product.name : "Default name"
  const cartDescription = product ? product.description : "Default"
  const cartPrice = product ? product.price : "Default price"

  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, ()=>setRedirect(true));
      console.log("Added to cart")
    } else {
      console.log("Login please!")
    }
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Navigate to="/Cart" />
    }
  };

  const showAddToCart = (addToCart) => {
    return (
        addtoCart && (<button
              onClick={addToCart}
              className="btn btn-block btn-outline-success mt-2 mb-2">
          Add to Cart
          </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return(
      removeFromCart && (
               <button
                onClick={() => {
                  //Todo handle this
                  removeItemFromCart(product.id)
                  setReload(!reload)
                  console.log("Product Removed from Cart")
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
      )
    )
  }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
        {getRedirect(redirect)}
          <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded btn-sm px-4">₹ {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;