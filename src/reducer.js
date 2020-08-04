export const initialState = {
    basket: [],
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
            return { state }
        default:
            return state;
    }
}

export default reducer