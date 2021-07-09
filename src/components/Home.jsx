import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import Header from "./Header";
import PizzaBlock from "./PizzaBlock";
import Loader from "./Loader";
import Sort from "./Sort";
import { pizzasAction } from "./../redux/action/pizzas";

const sortArray = [
  {name:'популярности'}, 
  {name:'цене'}, 
  {name:'алфавиту'}
];

const Home = () => {


  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(pizzasAction(data.pizzas))
    })

  }, [])

  


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              items={[
                'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
              ]}
            />
            <Sort items={sortArray} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="product-list">
            {

              !isLoaded
                ? <Loader />
                : pizzas.map((elem, index) => <PizzaBlock  {...elem} key={elem.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;