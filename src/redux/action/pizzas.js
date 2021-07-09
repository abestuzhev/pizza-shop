export const pizzasAction = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}