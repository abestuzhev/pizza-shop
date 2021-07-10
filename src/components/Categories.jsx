import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/action/category';

const Categories = ({items}) => {

    // const [itemIndex, setItemIndex] = useState(0);

    const itemIndex = useSelector(state => state.category.active)
    const dispatch = useDispatch()


    const onClickItem = (item, index) => {
        dispatch(setCategory(index));
    }

    return (
        <>
        <div className="categories">
            <div className="categories-list">
            {
                items.map((item, index) => {
                    return <div onClick={()=> onClickItem(item, index)} className={itemIndex === index ? "categories-list__link active" : "categories-list__link"} key={`${item}_${index}`}>{item}</div>
                })
            }
            </div>
        </div>
        </>
    )
}

export default Categories;