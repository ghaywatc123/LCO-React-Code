import React, { useEffect, useState } from 'react'
import Base from "./Base"
import Card from './Card'
import { addItemToCart, loadCart, removeItemFromCart } from './helper/cartHelper'
import Payment from './Payment'


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
                    addtoCart = {false}
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
            <div className='col-6'>{products.length > 0 ?
            (
              <Payment products={products} setReload={setReload }/>
            ): 
              (
                <h3>Please Login or add something in cart</h3>
              )
            }
            </div>
        </div>
      <h1>Welcome to Cart </h1>
      
    </Base>
  )
}

export default Cart;