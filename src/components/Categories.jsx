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
            <ul>
            {
                items.map((item, index) => {
                    return <li onClick={()=> onClickItem(item, index)} className={itemIndex === index ? "active" : ""} key={`${item}_${index}`}>{item}</li>
                })
            }
            </ul>
        </div>
        </>
    )
}

export default Categories;