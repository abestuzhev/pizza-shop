import {Route, Switch, useRouteMatch, useHistory, useParams} from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import ProductInfo from "./components/Product/ProductInfo";
import Cart from "./components/Cart";
import Checkout from "./components/Сheckout/Checkout";

import axios from "axios";
import { pizzasAction } from "./redux/action/pizzas";
import { useDispatch, useSelector } from "react-redux";



// const obj = {
//   0: [
//     {
//       id: 13,
//       name: 'name 0'
//     },
//     {
//       id: 14,
//       name: 'name 2'
//     }
//   ],
//   1: [
//     {
//       id: 5,
//       name: 'name 1'
//     }
//   ]
// }

// const arrItems = Object.values(obj);

// console.log('arrItems', arrItems);


// console.log([].concat.apply([], arrItems).length);


function App() {
  const history = useHistory();

  const dispatch = useDispatch();
  window.test = () => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
          dispatch(pizzasAction(data.pizzas))
        })   
  }

  return (
    <>
    

      
      <Route path="/cart">
        <Cart /> 
      </Route>

      <Route path="/checkout">
        <Checkout /> 
      </Route>
      

      <Route
          path="/product/:id"
          children={({match}) => {
              return (
                  Boolean(match) &&
                  <Modal history={history} size="small" closeBtn={true}>
                      <ProductInfo/>
                  </Modal>
              )
          }}
        />

      

        <Route path="/" exact>
          <Home /> 
        </Route>
    </>

    
  
  )
}

export default App;
