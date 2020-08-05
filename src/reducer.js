export const initialState = {
    basket: [
    {
        id: "3243243243",
        title: "New Apple IPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
        price: 589.99,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/81bFlyDPHkL._AC_SL1500_.jpg"
    }
],
user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case 'ADD_TO_BASKET': 
            // logic for adding basket
            return { 
                ...state,
                basket: [...state.basket, action.item], 
            }
        case 'REMOVE_FROM_BASKET':
            // logic for remove basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id} as its not `
                );
            }
            return { 
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer