const express = require('express')
const helmet = require('helmet') //provides simple security defaults
// const carRouter = require('./routers')
const server = express()

server.use(express.json())

server.use(helmet())

server.use('/api/cars', carRouter)

server.get('/', (req, res) => {
    res.status(200).json({hello: 'from the other side'})
})



const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`API running on port ${PORT}`))