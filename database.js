import pg from 'pg'
const Client = pg.Client

// console.log('hi')
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
