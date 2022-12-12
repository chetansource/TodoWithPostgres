import pg from 'pg'
const Client = pg.Client

const client = new Client({
  user: 'chetan',
  host: 'localhost',
  database: 'todolist',
  password: '12345',
  port: 5432
})

export function connectDataBase () {
  client.connect((error) => {
    if (error) {
      console.log(error.message)
    } else {
      console.log('Connection successful..')
    }
  })
}

export async function getTodos () {
  const todos = await client.query('SELECT * from todo  ORDER BY id;')
  return todos.rows
}

export async function insertTodo (todo) {
  const addTodo = `INSERT INTO todo (name) VALUES ('${todo}');`// change
  return await client.query(addTodo)
}
export async function updateTodo (id, property, value) {
  const updateTodo = `UPDATE todo 
  SET ${property} ='${value}'
  WHERE id=${id};`
  return await client.query(updateTodo)
}
export async function deleteTodo (id) {
  const deleteTodo = `DELETE FROM todo
  WHERE id=${id};`
  return await client.query(deleteTodo)
}

export async function deleteDone () {
  const delDone = `DELETE FROM todo
  WHERE checkbox = 'true';`
  return await client.query(delDone)
}
export async function deleteAll () {
  const delAll = 'DELETE FROM todo;'
  return await client.query(delAll)
}
export async function showCompleted () {
  const completed = `SELECT * FROM todo
  WHERE checkbox = 'true' ORDER BY id;`
  return await client.query(completed)
}
export async function pendingTodos () {
  const pending = `SELECT * FROM todo
  WHERE checkbox = 'false' ORDER BY id;`
  return await client.query(pending)
}
