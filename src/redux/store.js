import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cart from './reducer/cart';
import { categoryReducer } from './reducer/category';
import filters from './reducer/filter';
import { pizzasReducer } from './reducer/pizzas';

const rootReducer  = combineReducers({
    category: categoryReducer,
    pizzas: pizzasReducer,
    filters: filters,
    cart: cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.s = store;

export default store;