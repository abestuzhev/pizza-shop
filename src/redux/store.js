import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoryReducer } from './reducer/category';
import filters from './reducer/filter';
import { pizzasReducer } from './reducer/pizzas';

const rootReducer  = combineReducers({
    category: categoryReducer,
    pizzas: pizzasReducer,
    filters: filters
})



const store = createStore(rootReducer, applyMiddleware(thunk))

window.s = store;

export default store;