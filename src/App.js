import axios from "axios";
import { useState, useEffect } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

const sortArray = [
  {name:'популярности'}, 
  {name:'цене'}, 
  {name:'алфавиту'}
];

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
    
  }, [])

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories 
            items={[
              'Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'
            ]}
            />
            <Sort items={sortArray}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              
              pizzas.map((elem, index) => <PizzaBlock {...elem} key={elem.id}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
