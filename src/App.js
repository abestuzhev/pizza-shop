import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              Array(10).fill(0).map((elem, index) => <PizzaBlock key={index}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
