import { combineReducers, createStore } from 'redux';
import { categoryReducer } from './reducer/category';

const rootReducer  = combineReducers({
    category: categoryReducer
})



const store = createStore(rootReducer)

window.s = store;

export default store;