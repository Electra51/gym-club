import React from 'react';
import './Product.css';
const Product = (props) => {
    const { product, handleAddToList} = props;
    const { name, img, paragraph, time } = product;
    

    return (
        
        <div className='product'>
            
            
            <div>
                <img src={img} alt="" />
            <div className='info'>
            <h3>{name}</h3>
            <p className='para'>{paragraph}</p>
            <p>Time:{time}m</p>
           
            </div>
            <button onClick={()=> handleAddToList(product)} className='btn-info'>
                <p>Add to List</p>
            </button>
            </div>
        </div>
    );
};

export default Product;