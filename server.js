const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const userRouter = require('./router/userRouter')
const queryRouter = require('./router/queryRouter')
const memoryRouter = require('./router/memoryRouter')
const notesRouter = require('./router/notesRouter')
const favsRouter = require('./router/favsRouter')
const todosRouter = require('./router/todosRouter')

const port = process.env.PORT || 3001
const app = express()

// db connectionssss
require('./db/db')

// for cross requests
app.use(cors())

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// routes for user
app.use('/user', userRouter)

// routes for query
app.use('/query', queryRouter)

// routes 
app.use('/memory', memoryRouter)
app.use('/notes', notesRouter)
app.use('/favs', favsRouter)
app.use('/todos', todosRouter)

app.listen(port, () => {
    console.log(`Server listening at port:${port}`)
})