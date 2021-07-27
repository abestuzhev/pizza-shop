import React, {useState} from 'react';

function Radio({value, onChange, defaultValue, orientation, control, name, checked, ref}) {

    // console.log(`orientation ${name}`, orientation);
    // console.log('name', name);
    const [valueRadio, setValueRadio] = useState(defaultValue);
    const onChangeRadio = (event) => {        
        setValueRadio(event.target.value);
        onChange(event.target.value);
        // console.log('event.target.value', event.target.value);
    }

    return (
        <div className={orientation === "horizontal" ? "c-form-radio horizontal" : "c-form-radio vertical"}>
            {
                value.map( (item, index) => {
                    return (
                        <div className="c-form-radio__item" key={`${index}-${index}`}>
                            <div className="c-radio">
                                <input
                                    type="radio"
                                    name={name}
                                    checked={valueRadio === item.value}
                                    id={`${item.value}-${index}`}
                                    onChange={onChangeRadio}
                                    ref={ref}
                                    value={item.value}
                                />
                                <label htmlFor={`${item.value}-${index}`}>{item.name}</label>
                                {
                                    item.workTime &&
                                    <div className="c-radio__text">{item.workTime}</div>
                                }
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
}

export default Radio;
