import React, {useState, useEffect} from 'react'
import { getProducts } from './helper.js/coreapicalls'



export default function Home() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
        getProducts().then((data) => {
          if (data.error) {
            console.log(error);
          }else{
            setProducts(data);
          }
        });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <div>
      <h1>Home Component</h1>
      <div className='row'>
          {products.map((products, index) =>{
            return(
                <div key={index}>
                    <h1>{products.name}</h1>
                </div>
            )
          })}
      </div>
    </div>
  );
}
