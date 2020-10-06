const express = require('express')
const db = require('./data/connection')
const router = express.Router()

router.get('/', (req, res) => {
    db.get()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: 'Error getting cars'})
    })
})

router.post('/', (req, res) => {
    const thisCar = req.body
    db.insert(thisCar)
    .then(car => {
        res.status(201).json({car: thisCar})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: 'Error adding car'})
    })
})

module.exports = router