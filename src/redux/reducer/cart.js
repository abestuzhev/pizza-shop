const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}


const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                [action.payload.id]: !state.items[action.payload.id] 
                ? [action.payload] 
                : [
                    ...state.items[action.payload.id],
                    action.payload
                ]
            }
        }
        default:
            return state;
    }
}

export default cart;