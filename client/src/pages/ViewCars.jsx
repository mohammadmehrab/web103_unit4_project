import { React, useState, useEffect} from 'react'
import '../App.css'
import CarsAPI from '../services/CarsAPI'
import Card from '../components/Card'

const ViewCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const carsData = await CarsAPI.getAllCars()
                setCars(carsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])
    
    return (
        <div className="cars-list">
            <main>
            {
                cars && cars.length > 0 ?
                cars.map((car,index) => 
                    
                   <Card key={car.id}
                         id={car.id} 
                         name={car.name} 
                         interior={car.interior} 
                         exterior={car.exterior} 
                         isconvertible={car.isconvertible} 
                         roof={car.roof} 
                         wheels={car.wheels} 
                         price={car.price} 
                         />

                ) : <h3 className="noResults">{'No Cars Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default ViewCars