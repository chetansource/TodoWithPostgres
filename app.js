import express from 'express'
import { connectDataBase, getTodos, insertTodos, updateTodos, deleteTodos } from './database.js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json()) // json middleware converting request to json
app.use(express.static('public'))

connectDataBase()

app.get('/todos', async (req, res) => {
  try {
    const result = await getTodos()
    res.json(result)
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

app.put('/updateTodos/:id/:property', async (req, res) => {
  try {
    const id = req.params.id.slice(1)
    const property = req.params.property.slice(1)
    const value = req.body.updateValue
    const modifyTodo = await updateTodos(id, property, value)
    res.json(modifyTodo)
  } catch (error) {
    console.log(error.message)
  }
})
app.delete('/deleteTodos/:id', async (req, res) => {
  try {
    const id = req.params.id.slice(1)
    console.log(id)
    const deleteEntry = await deleteTodos(id)
    res.json(deleteEntry)
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(3000, () => console.log(' its live on http://localhost:3000'))
