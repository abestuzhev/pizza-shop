import {Route, Switch, useRouteMatch, useHistory, useParams} from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import ProductInfo from "./components/Product/ProductInfo";
import Cart from "./components/Cart";

import axios from "axios";
import { pizzasAction } from "./redux/action/pizzas";
import { useDispatch, useSelector } from "react-redux";

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
    

      
      <Route path="/cart" exact>
        <Cart /> 
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
