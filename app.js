import express from 'express'
import {connectDataBase , getTodos} from './database.js'


const app = express()
app.use(express.json())
app.use(express.static('public'))

connectDataBase()

app.get('/todos', async (req, res) => {
  try {
    const result = await getTodos()
    res.status(200).json(result)
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
})


app.listen(3000, ()=> console.log(" its live on http://localhost:3000"))

