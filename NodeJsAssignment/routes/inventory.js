const express = require('express')
const router = express.Router()
const inventry = require('../models/inventory')
var mongoose = require('mongoose');

router.get('/', async(req,res) => {
    const inventries = await inventry.find()
    res.json(inventries)
})

router.post('/', async(req,res) => {
    const inventory = new inventry({
        name: req.body.name,
        quantity: req.body.quantity
    })
        const invtry = await inventory.save()
        res.json(invtry)
})  

router.get('/:name', async(req,res) => {   
    const inventory = await inventry.find({name: req.params.name})
    res.json(inventory)  
})

router.delete('/:name', async(req,res) => {  
    const inventory = await inventry.deleteOne({name: req.params.name})
    //const inv = await inventry.remove(inventory)
    res.json(inventory)  
})

module.exports = router