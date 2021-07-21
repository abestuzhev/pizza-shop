import React, {useState} from 'react';
import { useEffect } from 'react';

const RadioTest = React.forwardRef(({value, onChange, defaultValue, name, checked }, ref) => {

    // console.log('name', name);
    // console.log('defaultValue', defaultValue);
    const [valueRadio, setValueRadio] = useState(defaultValue);

    const onChangeRadio = (event) => {        
        setValueRadio(event.target.value);
        onChange(event.target.value);
        console.log('event.target.value', event);
        // console.log('valueRadio', valueRadio);
    }
    

    return (
        <div className="c-form-radio" name={name}>
            {
                value.map( (item, index) => {
                    return (
                        <div className="c-form-radio__item" key={`${item.value}-${index}`}>
                            <div className="c-radio">
                                <input
                                    type="radio"
                                    name={name}
                                    checked={valueRadio === item.value}
                                    id={`${item.value}-${index}`}
                                    onChange={(e) => onChangeRadio(e)}
                                    ref={ref}
                                    value={item.value}
                                />
                                <label htmlFor={`${item.value}-${index}`}>{item.name}</label>
                                
                            </div>
                            
                        </div>
                    )
                })
            }

            {
                valueRadio === "CASH" &&
                <div>Подготовить сдачу с определенной суммы: 500, 1000, 2000, 5000</div>
            }
        </div>
    )
})

export default RadioTest;
