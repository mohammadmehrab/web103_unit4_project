const options = 
[
    {
      "name": "interior",
      "options": [
        { "option": "Basic Fabric Seats", "price": 1000 },
        { "option": "Leather Upholstery", "price": 2500 },
        { "option": "Heated Seats with Memory Foam", "price": 3000 },
        { "option": "Massage Seats", "price": 4500 },
        { "option": "Custom Interior Trim and Ambient Lighting", "price": 6000 }
      ]
    },
    {
      "name": "exterior",
      "options": [
        { "option": "Basic Paint", "price": 500 },
        { "option": "Metallic Paint", "price": 1200 },
        { "option": "Matte Finish", "price": 2500 },
        { "option": "Chrome Exterior Trim", "price": 3500 },
        { "option": "Custom Wrap", "price": 5000 }
      ]
    },
    {
      "name": "roof",
      "options": [
        { "option": "Standard Fixed Roof", "price": 0 },
        { "option": "Sunroof", "price": 1500 },
        { "option": "Panoramic Glass Roof", "price": 3000 },
        { "option": "Convertible Soft Top", "price": 4500 },
        { "option": "Carbon Fiber Roof", "price": 6500 }
      ]
    },
    {
      "name": "wheels",
      "options": [
        { "option": "16” Steel Wheels", "price": 600 },
        { "option": "18” Alloy Wheels", "price": 1200 },
        { "option": "20” Performance Wheels", "price": 2500 },
        { "option": "Custom Forged Wheels", "price": 4000 },
        { "option": "Carbon Fiber Wheels", "price": 8000 }
      ]
    }
]

const getTotalPrice = (car) => {
    let price = car.isconvertible ? 70000 : 65000
    
}

export {
    options
}