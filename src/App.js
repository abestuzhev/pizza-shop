import {Route, Switch, useRouteMatch, useHistory, useParams} from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import ProductInfo from "./components/Product/ProductInfo";


function App() {


  const history = useHistory();

  return (
    <>
    

      <Route path="/" >
        <Home /> 
      </Route>

      <Route
          path="/product/:id"
          children={({match}) => {
            console.log('matchRouter', match);
              return (
                  Boolean(match) &&
                  <Modal history={history} size="small" closeBtn={true}>
                      <ProductInfo/>
                  </Modal>
              )
          }}
        />
    </>

    
  
  )
}

export default App;
