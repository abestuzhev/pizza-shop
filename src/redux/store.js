import { combineReducers, createStore } from 'redux';
import { categoryReducer } from './reducer/category';
import { pizzasReducer } from './reducer/pizzas';

const rootReducer  = combineReducers({
    category: categoryReducer,
    pizzas: pizzasReducer
})



const store = createStore(rootReducer)

window.s = store;

export default store;