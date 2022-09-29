import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Question from '../Question/Question';
import './Shop.css';

import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const handleAddToList = (product) => {
        console.log(product);
        const newList = [...list, product];
        setList(newList);
        
    }
  
    
    return (
        <div>
             <div className='container'>
            
            <div className="Shop-container">
                
                
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToList={handleAddToList}
                        
                    ></Product>
                        )
                    
                }
                

            </div>
            <div className="select-container">
                    <Cart cart={list}></Cart>
                    
               
               
            </div>
           
        </div>
        <Question></Question>
       </div>
         
    );
};

export default Shop;