
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
    const {id} = useParams();
    const items = useSelector(({pizzas}) => pizzas.items)
    console.log('items', items);

    

    return (
        <>
        {items &&
            items.map((elem, index) => {
                console.log(elem.id);
                if(elem.id === +id) {
                    return (
                    <div className="modal-card" key={elem.id}>
                        <div className="modal-card__img">

                        </div>
                        <div className="modal-card__body">
                            <div className="modal-card__head">
                                <div className="modal-card__title">{elem.name}</div>
                                <div className="modal-card__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ratione sapiente!</div>
                            </div>
                            <div className="modal-card__footer">
                                <div className="modal-card__rating">Рейтинг: {elem.rating}</div>
                                <div className="modal-card__price">Цена: {elem.price}</div>
                            </div>
                        </div>                        
                    </div>
                    ) 
                }

            })
        }
            
            
        </>
    )
}

export default ProductInfo;