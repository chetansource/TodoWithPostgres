import express from 'express'
import { connectDataBase, getTodos, insertTodos, updateTodos } from './database.js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json()) // json middleware converting request to json
app.use(express.static('public'))

connectDataBase()

app.get('/todos', async (req, res) => {
  try {
    const result = await getTodos()
    res.json(result)
    // console.log(result)
  } catch (error) {
    console.log(error.message)
  }
})

app.post('/addTodos', async (req, res) => {
  try {
    const addTodo = await insertTodos(req.body.todo)
    res.json(addTodo)
  } catch (error) {
    console.log(error.message)
  }
})

app.post('/updateTodos', async (req, res) => {
  try {

  } catch (error) {
    console.log(error.message)
  }
})

app.listen(3000, () => console.log(' its live on http://localhost:3000'))
