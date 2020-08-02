import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
   return (
      <div className="product">
         <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
               <small>₹</small>
               <strong>{price}</strong>
            </p>
            <div className="product-rating">
               {Array(Math.floor(rating))
                  .fill()
                  .map((_) => (
                     <span role="img" aria-label="">
                        ⭐
                     </span>
                  ))}
            </div>
         </div>

         <img src={image} alt="" />
         <button>Add to Basket</button>
      </div>
   );
}

export default Product;
