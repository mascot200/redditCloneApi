const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URI
const port = process.env.PORT || 7000


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/v1', postRoute)
app.use('/api/v1', projectsRoute)



mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error, 'connection error')
})

database.once('connected', () => {
    console.log('mongodb has been connected')
})

app.listen(port, () => console.log('SERVER listening on port ' + port))