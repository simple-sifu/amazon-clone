export const initialState = {
    basket: [],
};

function reducer (state, action){
    switch (action.type){
        case 'ADD_TO_BASKET': 
            // logic for adding basket
            break;
        case 'REMOVE_FROM_BASKET':
            // logic for remove basket
            break;
        default:
            return state;
    }
}

export default reducer