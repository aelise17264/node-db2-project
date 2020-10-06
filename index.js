const express = require('express')
const helmet = require('helmet') //provides simple security defaults
const server = express()


server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).json({hello: 'from the other side'})
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`API running on port ${PORT}`))