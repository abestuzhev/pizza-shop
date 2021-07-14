import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import Header from "./Header";
import PizzaBlock from "./PizzaBlock";
import Loader from "./Loader";
import Sort from "./Sort";
import { fetchPizzas } from "./../redux/action/pizzas";

const sortArray = [
  {name:'популярности', type: "popular", order: 'desc'}, 
  {name:'цене', type: "price", order: 'desc'}, 
  {name:'алфавиту', type: "name", order: 'asc'}
];

const categoriesArray = [
  'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
];

const Home = () => {


  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);

  useEffect(() => {
    console.log('rerender home');
    dispatch(fetchPizzas(category, sortBy));

  }, [category, sortBy])

  


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              items={categoriesArray}
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