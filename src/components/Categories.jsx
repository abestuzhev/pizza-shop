import {useState} from 'react';

const Categories = ({items}) => {

    const [itemIndex, setItemIndex] = useState(0);


    const onClickItem = (item, index) => {
        setItemIndex(index);
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