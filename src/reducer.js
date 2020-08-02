export const initialState = {
   basket: [],
   user: null,
};

function reducer(state, action) {
   switch (action.type) {
      case 'ADD_TO_BASKET':
         // Adding item to basket
         return {
            ...state,
            basket: [...state.basket, action.item],
         };
      case 'REMOVE_FROM_BASKET':
         // Removing item from basket
         return { state };
      default:
         return state;
   }
}

export default reducer;
