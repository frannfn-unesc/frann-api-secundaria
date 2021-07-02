const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')

app.use('/api', routes)

app.listen(PORT, function(){
    console.log(`Servidor iniciado na porta ${PORT}`)
})