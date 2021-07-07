const initialState = {
    active: null
}

export const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ACTIVE_CATEGORY': {
            return {
                ...state,
                active: action.payload
            }
        }
        default:
            return state;
    }
}