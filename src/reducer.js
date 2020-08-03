export const initialState = {
   basket: [
      {
         id: '20984042',
         title: 'Samsung Galaxy S10 Plus (Blue, 8GB RAM, 128GB Storage)',
         price: 55999,
         rating: 4.3,
         image:
            'https://m.media-amazon.com/images/I/61fv4VZRQ7L._AC_UY327_FMwebp_QL65_.jpg',
      },
      {
         id: '20984042',
         title: 'Samsung Galaxy S10 Plus (Blue, 8GB RAM, 128GB Storage)',
         price: 55999,
         rating: 4.3,
         image:
            'https://m.media-amazon.com/images/I/61fv4VZRQ7L._AC_UY327_FMwebp_QL65_.jpg',
      },
   ],
   user: null,
};

export const getBasketTotal = (basket) =>
   basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
   console.log(action);
   switch (action.type) {
      case 'ADD_TO_BASKET':
         // Adding item to basket
         return {
            ...state,
            basket: [...state.basket, action.item],
         };
      case 'REMOVE_FROM_BASKET':
         // Removing item from basket
         let newBasket = [...state.basket];
         const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
         );

         if (index >= 0) {
            // If item exists
            newBasket.splice(index, 1);
         } else {
            // Show warning
            console.warn(
               `Cant remove product (id: ${action.id}) as its not found`
            );
         }

         return {
            ...state,
            basket: newBasket,
         };
      default:
         return state;
   }
}

export default reducer;
