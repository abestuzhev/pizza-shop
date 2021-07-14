
import axios from 'axios';

export const pizzasAction = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const fetchPizzas = (category, sortBy) => dispatch => {
    console.log('fetchpizzas');
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=asc`).then(({ data }) => {
        // console.log(`${category} - ${sortBy.type}`);
        dispatch(pizzasAction(data))
    })
}