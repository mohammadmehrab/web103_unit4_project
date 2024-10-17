import React from 'react';
import './CarOption.css'

const CarOption = (props) => { 

    return (
        <div className="car-option">
            <div className='top-container'>
                <h2>{props.name}</h2>
            </div>
            <div className='bottom-container'>
                {(props.options && props.options.length) > 0 ?

                    props.options.map(option => {
                        return (
                            <div key={option.option}>
                                <input type="radio" value={option.option} name={props.name} onChange={props.handleChange}/>{option.option} ${option.price} 
                            </div>
                        )
                    })
                    : <h3>Either this option doesnt exist or there are no choices for this option yet.</h3> 
                }
                

            </div>
        </div>
    );
}

export default CarOption;