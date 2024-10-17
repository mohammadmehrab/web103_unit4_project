import { pool } from "../config/database.js";

const getCars = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch(err) {
        res.status(409).json({error: err.message})
    }
}

async function getCarById(req, res) {
    try {
        const selectQuery = `
            SELECT name, interior, exterior, isconvertible, roof, wheels, price
            FROM cars
            WHERE id=$1
        `

        const carId = req.params.carId

        const results = await pool.query(selectQuery, [carId])

        res.status(200).json(results.rows[0])

    } catch(error) {
        res.status(409).json( {error: error.message})
    }
}

const createCar = async (req, res) => {
    try {
        const { name, interior, exterior, isconvertible, roof, wheels, price } = req.body
        const results = await pool.query(`
            INSERT INTO cars (name, interior, exterior, isconvertible, roof, wheels, price)
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [name, interior, exterior, isconvertible, roof, wheels, price]
          )
        res.status(201).json(results.rows[0])
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
} 

const updateCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { name, interior, exterior, isconvertible, roof, wheels, price } = req.body
        const results = await pool.query(`
            UPDATE cars SET name = $1, interior = $2, exterior = $3, isconvertible = $4, roof = $5, wheels = $6, price= $7 WHERE id = $8`,
            [name, interior, exterior, isconvertible, roof, wheels, price, id]
        )
        res.status(200).json(results.rows[0])
    } catch(error) {
        res.status(409).json( { error: error.message } )
    } 
} 

const deleteCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM cars WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }


} 

export default {
    getCars, 
    getCarById,
    deleteCar,
    updateCar,
    createCar
}