import { pool } from "./database.js";
import { carData } from "../data/cars.js";


async function createCarsTable() {

    const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        interior VARCHAR(255) NOT NULL,
        exterior VARCHAR(255) NOT NULL,
        isconvertible BOOLEAN NOT NULL,
        roof VARCHAR(255) NOT NULL,
        wheels VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL
    )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 cars table created successfully')
    } catch (err) {
        console.error('⚠️ error creating cars table', err)
    }
}

async function seedCarsTable() {
    await createCarsTable();

    carData.forEach(car => {
        const insertQuery = {
            text: 'INSERT INTO cars (name, interior, exterior, isconvertible, roof, wheels, price) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }
        const values = [
            car.name,
            car.interior,
            car.exterior,
            car.isConvertible,
            car.roof,
            car.wheels,
            car.price
        ]
        
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting car', err)
                return
            }
        
            console.log(`✅ ${car.name} added successfully`)
        })
    })
}

seedCarsTable()

