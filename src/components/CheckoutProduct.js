import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
   const [, dispatch] = useStateValue();

   const removeFromBasket = () => {
      dispatch({
         type: 'REMOVE_FROM_BASKET',
         id: id,
      });
   };

   return (
      <div className="checkout-product">
         <img src={image} alt="" />
         <div className="checkout-product-info">
            <p className="checkout-product-title">{title}</p>
            <p className="checkout-product-price">
               <small>₹</small>
               <strong>{price}</strong>
            </p>
            <div className="checkout-product-rating">
               {Array(Math.floor(rating))
                  .fill()
                  .map((_) => (
                     <span role="img" aria-label="">
                        ⭐
                     </span>
                  ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
         </div>
      </div>
   );
}

export default CheckoutProduct;
