import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/action/cart";
// import classNames from 'classnames';

const PizzaBlock = ({name, price, types, sizes, id, addPizzaToCart}) => {


	// const param = useParams();
	// console.log('param', param);
	const selectors = ['тонкое', 'традиционное'];
	const sizesSelectors = [26,30,40];

	const [activeType, setActiveType] = useState(types[0]);
	const [activeSize, setActiveSize] = useState(sizes[0]);
	const onSelectType = (index) => {
		setActiveType(index)
	}

	const setClassNames = (index) => {
		if(activeType === index){
			return 'active';
			
		}else{
			if(!types.includes(index)){
				return 'disabled';
			}
			return '';
		}		
	}
	
	const onSelectSize = (index) => {
		setActiveSize(sizesSelectors[index]);
	}

	const setClassSizes = (index) => {
		if(activeSize === sizesSelectors[index]){
			return 'active';
			
		}else{
			if(!sizes.includes(sizesSelectors[index])){
				return 'disabled';
			}
			return '';
		}		
	}

	const showProductPopup = () => {
		console.log("showProductPopup");
	}

	const handlePizzaToCart = () => {
		const obj = {
			name,
			id,
			type: selectors[activeType],
			size: activeSize
		}
		console.log(obj);
		addPizzaToCart(obj)
	}

	


	return (
		<>
			<div className="product-list__item">
				<div className="pizza-block">
					<div className="pizza-block__img">
						<div style={{ width: 250, height: 250, background: '#eee', borderRadius: '500px', marginBottom: 20 }}
						onClick = {showProductPopup}></div>
					</div>
					<div className="pizza-block__body">
						<h4 className="pizza-block__title">{name}</h4>
						<div className="pizza-block__selector">
							<ul>
								{
									selectors.map((item, index )=> {
										return <li 
										onClick={()=> onSelectType(index)}
										className={setClassNames(index)} 
										key={`${item}_${index}`}>
											{item}
											</li>
									})
								}
							</ul>
							<ul>
								{
									sizesSelectors.map((elem, index) => {
										return <li 
										onClick={()=> onSelectSize(index)}
										className={setClassSizes(index)}
										key={`${elem}_${index}`}>
											{`${elem}см`}
											</li>
									})
								}
							</ul>
						</div>
						<div className="pizza-block__bottom">
							<div className="pizza-block__price">от {price} ₽</div>
							<a className="button button--outline button--add" onClick={handlePizzaToCart}>
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
										fill="white"
									/>
								</svg>
								<span>Добавить</span>
								<i>2</i>
							</a>
						</div>
					</div>
					
					
				</div>
			</div>
			
		</>
	);
};


export default PizzaBlock;