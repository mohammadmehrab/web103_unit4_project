async function getAllCars() {
    const response = await fetch('/api')
    const data = await response.json()

    return data
}

async function getCar(carId) {
    const response = await fetch(`/api/${carId}`)
    const data = await response.json()

    return data
}

async function createCar(car) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car),
    }

    const response = await fetch(`/api`, options)
}

async function updateCar(car, id) {
    const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(car),
    }

    const response = await fetch(`/api/${id}`, options)

}

async function deleteCar(id) {
    const options = {
        method: 'DELETE'
    } 

    const response = await fetch(`/api/${id}`, options)
}

export default {
    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar
}