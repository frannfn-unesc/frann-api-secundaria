const express = require('express')
const router = express.Router()
const routes = {
    marcas: require('./marcas'),
}

router.use('/marcas', routes.marcas)

module.exports = router