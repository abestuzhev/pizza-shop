import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setCategory} from '../redux/action/filters';

const Categories = React.memo(({items}) => {

    // const [itemIndex, setItemIndex] = useState(0);

    const itemIndex = useSelector(({filters}) => filters.category)
    const dispatch = useDispatch()

    console.log('itemIndex', itemIndex);

    const onClickItem = (item, index) => {
        dispatch(setCategory(index));
    }


    return (
        <>
        <div className="categories">
            <div className="categories-list">
            <div 
                onClick={()=> onClickItem('Все', null)} 
                className={itemIndex === null ? "categories-list__link active" : "categories-list__link"} >
                 Все
             </div>
            {
                items.map((item, index) => {
                    return <div 
                    onClick={()=> onClickItem(item, index)} 
                    className={itemIndex === index ? "categories-list__link active" : "categories-list__link"} 
                    key={`${item}_${index}`}>
                        {item}
                    </div>
                })
            }
            </div>
        </div>
        </>
    )
})

export default Categories;