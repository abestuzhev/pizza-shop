import React from 'react'

function Radio({value, onChange, defaultValue, control, name, checked, ref}) {

    const onChangeRadio = (event) => {
        onChange(event.target.value);
        console.log('event.target.value', event.target.value);
    }

    return (
        <div className="c-form-radio">
            {
                value.map( (item, index) => {
                    return (
                        <div className="c-form-radio__item">
                            <input
                            type="radio"
                            name='pay'
                            className="c-radio"
                            checked={checked}
                            id={`${index}-${index}`}
                            key={`${index}-${index}`}
                            onChange={onChangeRadio}
                            ref={ref}
                            value={item.value}
                            />
                            <label htmlFor={`${index}-${index}`}>{item.name}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Radio;
