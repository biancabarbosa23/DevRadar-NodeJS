const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://bialves23:23102000@cluster0.wtab0.mongodb.net/estudo?authSource=admin&replicaSet=atlas-21d110-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)