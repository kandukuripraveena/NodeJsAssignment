const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/Inventory'

const app = express() 
mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.listen(9000, () => {
    console.log('server started')
})

app.use(express.json())
const invRouter = require('./routes/inventory')
app.use('/inventory',invRouter)