import express from 'express'
import { connectDataBase, getTodos, insertTodo, updateTodo, deleteTodo, deleteDone, deleteAll, showCompleted, pendingTodos } from './database.js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json()) // json middleware converting request to json
app.use(express.static('public')) // express middleware

connectDataBase()

app.get('/todo', async (req, res) => {
  try {
    const result = await getTodos()
    res.json(result)
  } catch (error) {
    console.log(error.message)
    res.send('Error 500 server not responding')
  }
})

app.post('/addTodo', async (req, res) => {
  try {
    const addTodo = await insertTodo(req.body.todo)
    res.json(addTodo)
  } catch (error) {
    console.log(error.message)
  }
})

app.put('/updateTodo/:id/:property', async (req, res) => {
  try {
    const id = req.params.id
    const property = req.params.property
    const value = req.body.updateValue
    const modifyTodo = await updateTodo(id, property, value)
    res.json(modifyTodo)
  } catch (error) {
    console.log(error.message)
  }
})
app.delete('/deleteTodo/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deleteEntry = await deleteTodo(id)
    res.json(deleteEntry)
  } catch (error) {
    res.send(error.message)
  }
})
app.delete('/deleteDone', async (req, res) => {
  try {
    const delDone = await deleteDone()
  } catch (error) {
    res.send(error.message)
  }
})

app.delete('/deleteAll', async (req, res) => {
  try {
    const delAll = await deleteAll()
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/showCompleted', async (req, res) => {
  try {
    const Completed = await showCompleted()
    res.json(Completed)
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/Pending', async (req, res) => {
  try {
    const Pending = await pendingTodos()
    res.json(Pending)
  } catch (error) {
    res.send(error.message)
  }
})

app.listen(3000, () => console.log(' its live on http://localhost:3000'))
// refer a restful doc
