import React, {useState} from 'react';

function Checkbox({value, onChange, defaultValue, orientation, checked, name, ref}) {

    console.log("checked", checked);
    const [valueCheckbox, setValueCheckbox] = useState(defaultValue);
    const onChangeCheckbox = (event) => {        
        setValueCheckbox(event.target.value);
        onChange(event.target.value);
        console.log('event.target.value', event.target.value);
    }

    return (
        <div className={orientation === "horizontal" ? "c-form-checkbox horizontal" : "c-form-checkbox vertical"}>
            {
                value.map( (item, index) => {
                    return (
                        <div className="c-form-checkbox__item" key={`${item.value}-${index}`}>
                            <div className="c-checkbox">
                                <input
                                    type="checkbox"
                                    name={`${name}-${item.value}`}
                                    id={`${item.value}-${index}`}
                                    onChange={onChangeCheckbox}
                                    ref={ref}
                                    value={item.value}
                                />
                                <label htmlFor={`${item.value}-${index}`}>{item.name}</label>
                                
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Checkbox;
