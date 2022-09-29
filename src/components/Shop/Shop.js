import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Question from '../Question/Question';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    }, [])
    return (
        <div className='container'>
            
            <div className="Shop-container">
                
                
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>
                    )
                }
                

            </div>
            <div className="select-container">
                <div>
                    <img src="" alt="" />
                    <h4>Electra Nur</h4>
                    <p>Dhaka,Bangladesh</p>
                    
               </div>
            </div>
            <Question></Question>
      </div>
    );
};

export default Shop;