import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = (props) => { 
    const [car, setCar] = useState({id: 0, name: "", interior: "", exterior: "", isconvertible: 0, roof: "", wheels: "", price: 0});

    useEffect(() => {
        setCar({id: props.id, name: props.name, interior: props.interior, exterior: props.exterior, isconvertible: props.isconvertible, roof: props.roof, wheels: props.wheels, price: props.price});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container'>
                <h2><img src={car.isconvertible ? "src/assets/coupe.png" : "src/assets/coupe.png"}></img> {car.name}</h2>
            </div>
            <div className='bottom-container'>
                <div className="car-summary">
                    <p>{'Exterior: ' + car.exterior}</p>
                    <p>{'Roof: ' + car.roof}</p>
                </div>
                <div className="car-summary">
                    <p>{'Wheels: ' + car.wheels}</p>
                    <p>{'Interior: ' + car.interior}</p>
                </div>
                <div className="car-price">
                    <p>
                        {'💰 ' + car.price}
                        <a href={`/customcars/${car.id}`} role='button'>Details</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;