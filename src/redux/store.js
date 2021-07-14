import { combineReducers, createStore } from 'redux';
import { categoryReducer } from './reducer/category';
import filters from './reducer/filter';
import { pizzasReducer } from './reducer/pizzas';

const rootReducer  = combineReducers({
    category: categoryReducer,
    pizzas: pizzasReducer,
    filters: filters
})



const store = createStore(rootReducer)

window.s = store;

export default store;