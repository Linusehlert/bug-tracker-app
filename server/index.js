//server
const express = require('express')
//mongoDB
const mongoose = require('mongoose')

const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/bug-tracker'
mongoose.connect(dbUrl, {})

const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error"))
db.once('open', () => {
    console.log("Database connected")
})

app.use(cors())

//Home Route
app.get("/", (req, res) =>
    res.json({message: "This is the Home Page"})
);

//Projects Route
app.get('/projects', (req, res) =>
    res.json({message: "This is the Project Page"})
)




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})