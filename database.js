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

export async function insertTodos (todo) {
  const addTodo = `INSERT INTO todo (name) VALUES ('${todo}');`
  return await client.query(addTodo)
}
export async function updateTodos () {
  `UPDATE todo 
  SET column =value
  WHERE condition(id)`
  return await client.query()
}
