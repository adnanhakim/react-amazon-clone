import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
   const [{ basket }] = useStateValue();

   return (
      <div className="checkout">
         <div className="checkout-left">
            <img
               className="checkout-ad"
               src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/hve-hero-widget-test/covid_stripe_leadup_pc.jpg"
               alt=""
            />
            {basket?.length === 0 ? (
               <div>
                  <h2>Your shopping basket is empty</h2>
                  <p>
                     You have no items in your basket. To buy one or more items,
                     click "Add to Basket" next to the item
                  </p>
               </div>
            ) : (
               <div>
                  <h2 className="checkout-title">Your Shopping Basket</h2>
                  {basket.map((item) => (
                     <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                     />
                  ))}
               </div>
            )}
         </div>
         {basket?.length > 0 && (
            <div className="checkout-right">
               <h1>Subtotal</h1>
            </div>
         )}
      </div>
   );
}

export default Checkout;
