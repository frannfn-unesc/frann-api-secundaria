const express = require('express')
const router = express.Router()
const Marca = require('../models/Marcas')

//converte o body em objeto
router.use(express.json())

//Pesquisa todas as marcas
router.get('/', async (req, res) =>{
    try{
        let marcas = []
        marcas = await Marca.find()
        res.json(marcas)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar as marcas"})
    }
})

//Pesquisa as marcas pelo id
router.get('/:id', async (req, res) => {
    try{
        console.log("api secundária")
        const id = req.params.id
        let marca = await Marca.findById(id)
        res.json(marca)
    } catch (err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar a marca"})
    }
})

//Salva a marca
router.post('/', async (req, res) => {
    try{
        const marca = new Marca(req.body)
        const resultado = await marca.save()
        res.json(resultado)
    } catch (err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao salvar a marca"})
    }
})

//Atualiza a marca de acordo com o id
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const marca = req.body
        const resultado = await Marca.findByIdAndUpdate(id, marca)
        res.json(resultado)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao alterar o produto"})
    }
})

//Deleta a marca de acordo com o id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const resultadso = await Marca.findByIdAndDelete(id)
        res.json(resultado)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao deletar o produto"})
    }
})

module.exports = router