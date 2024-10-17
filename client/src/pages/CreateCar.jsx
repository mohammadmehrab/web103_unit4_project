import React, { useEffect, useState } from 'react'
import '../App.css'
import CarOption from '../components/CarOption'
import { options } from '../services/Options'
import CarsAPI from '../services/CarsAPI'

const CreateCar = () => {

    const [car, setCar] = useState({
        name: "",
        interior: "",
        exterior: "",
        isconvertible: false,
        roof: "",
        wheels: "",
        price: 72100
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        

        setCar( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCar = async (event) => {
        event.preventDefault()
        setCar( (prev) => {
            return {
                ...prev,
                "price":get
            }
        })
        
        await CarsAPI.createCar(car)
        window.location = '/'

    }
    

    return (
        <form id="create-car">
            <label htmlFor="car-name-input">
                Name of Car:   &nbsp;
                <input type="text" name="name" id="car-name-input" value={car.name} onChange={handleChange}/>
            </label>
            <label htmlFor="convertible-checkbox">
                <input type="checkbox" name="isconvertible" id="isconvertible-checkbox" value={car.isconvertible} onChange={handleChange}/>
                Convertible
            </label>
            {
                options && options.length > 0 ? options.map((optionInfo,index) => {
                    return <CarOption key={optionInfo.name} name={optionInfo.name} options={optionInfo.options} handleChange={handleChange}/>
                })
                : <h3>didnt work</h3>
            }
            <input type='submit' value='Submit' onClick={createCar} />

        </form>
    )
}

export default CreateCar