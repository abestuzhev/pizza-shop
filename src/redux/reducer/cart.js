const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}


const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': {
            const objItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] 
                ? [action.payload] 
                : [
                    ...state.items[action.payload.id],
                    action.payload
                ]
            }

            const arrItems = Object.values(objItems);
            const allItems = [].concat.apply([], arrItems);
            const totalCount = allItems.length;
            const totalPrice = allItems.reduce((sum, obj) => obj.price + sum, 0)
            console.log('totalPrice', totalPrice);

            return {
                ...state,
                items: objItems,
                totalCount: totalCount,
                totalPrice: totalPrice,
            }
        }
        default:
            return state;
    }
}

export default cart;