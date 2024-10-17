import React, { useEffect, useState } from 'react'
import '../App.css'
import CarOption from '../components/CarOption'
import { options } from '../services/Options'
import CarsAPI from '../services/CarsAPI'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const CarDetails = () => {

    const {id} = useParams()
    const [car, setCar] = useState({
        name: "",
        interior: "",
        exterior: "",
        isconvertible: false,
        roof: "",
        wheels: "",
        price: 0
    })

    useEffect(() => {
        const fetchCarById = async () => {
            const response = await fetch(`/api/${id}`)
            const data = await response.json()
            setCar(data)
        }

        fetchCarById()
    }, [id])

    const deleteCar = async (event) => {
        event.preventDefault()

        await CarsAPI.deleteCar(id)

        window.location = '/customcars'

    }

    return (
        <div className="car-details">
            <div className='top-container'>
                <h2><img src={car.isconvertible ? "../src/assets/coupe.png" : "../src/assets/coupe.png"}></img> {car.name}</h2>
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
                        
                    </p>
                    <a href={`/edit/${id}`} role='button'>Edit</a>
                    <button onClick={deleteCar}>Delete</button>
                </div>
            </div>
        </div>
    );

  
}

export default CarDetails