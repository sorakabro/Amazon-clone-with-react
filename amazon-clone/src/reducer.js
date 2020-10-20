export const initialState = {
    basket: [
        {
        id:"123212" ,
        title:"New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model, 8th Generation)",
        price:299,
        rating:4,
        image:"https://m.media-amazon.com/images/I/71UNqxJlGxL._AC_UL320_.jpg" 
    },
    {
        id:"123212" ,
        title:"New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model, 8th Generation)",
        price:299,
        rating:4,
        image:"https://m.media-amazon.com/images/I/71UNqxJlGxL._AC_UL320_.jpg" 
    },
],
    user: null,
};


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            
            case "REMOVE_FROM_BASKET" :
                //Logic for removing item from basket
                
                // Cloned the basket
                let newBasket = [...state.basket];

                // found the index of the item
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

                if (index >= 0) {
                    // If item exists in basket, it removes it
                    newBasket.splice(index, 1);
                }
                else {
                    console.warn(
                        `Cant remove product (id: ${action.id}) as its nothing there`
                    );
                }
                
                // return new and updated basket
                    return {state, basket: newBasket, };
                default:
                    return state;
    }
}

export default reducer;