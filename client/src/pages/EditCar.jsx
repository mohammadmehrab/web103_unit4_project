import {React, useState, useEffect} from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import CarsAPI from '../services/CarsAPI'
import { options } from '../services/Options'
import CarOption from '../components/CarOption'

const EditCar = () => {
    
    const { id } = useParams()
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

    const handleChange = (event) => {
        const { name, value } = event.target

        setCar( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCar = async (event) => {
        event.preventDefault()
        await CarsAPI.updateCar(car, id)
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
            <input type='submit' value='Submit' onClick={updateCar} />

        </form>
    )
}

export default EditCar