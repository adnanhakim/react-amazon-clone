import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
   const [, dispatch] = useStateValue();

   const addToBasket = () => {
      dispatch({
         type: 'ADD_TO_BASKET',
         item: {
            id,
            title,
            image,
            price,
            rating,
         },
      });
   };

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
         <button onClick={addToBasket}>Add to Basket</button>
      </div>
   );
}

export default Product;
