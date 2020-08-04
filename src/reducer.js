export const initialState = {
   basket: [],
   user: null,
};

export const getBasketTotal = (basket) =>
   basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
   console.log(action);
   switch (action.type) {
      case 'SET_USER':
         // Adding user
         return {
            ...state,
            user: action.user,
         };
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
