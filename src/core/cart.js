import React, { useEffect, useState } from 'react'
import Base from "./Base"
import Card from './Card'
import { addItemToCart, loadCart, removeItemFromCart } from './helper/cartHelper'


const Cart =() => {
  const [reload, setReload] = useState(false)
 const [products, setProduct] = useState([])

 useEffect(() => {
    setProduct(loadCart())
 }, [reload])
 const loadAllProduct = (products) =>{
    return(
        <div>
            {products.map((product, index) =>(
                <Card
                    key = {index}
                    product = {product}
                    removeFromCart = {true}
                    addToCart = {false}
                    reload = {reload}
                    setReload = {setReload}
                />
            ))}
        </div>
    )
  }
  const loadCheckout = () =>{
    return(
       <h1>Checkout</h1>
    )
  }

  return (
    <Base title='MY Cart' description='This is my cart'>
         <div className='row text-center'>
            <div className='col-6'>{loadAllProduct(products)}</div>
            <div className='col-6'>{loadCheckout()}</div>
        </div>
      <h1>Welcome to Cart </h1>
      
    </Base>
  )
}

export default Cart;