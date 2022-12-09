export async function fetchTodos () {
  const todosUrl = 'http://localhost:3000/todos'
  const response = await fetch(todosUrl)
  const data = await response.json()
  return data
}
export async function insertTodos (input) {
  const todoUrl = 'http://localhost:3000/addTodos'
  const res = await fetch(todoUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: input.value
    })

  })
  return res
}

export async function updateTodos (property, value, todo) {
  const todoUrl = `http://localhost:3000/updateTodos/:${todo.id}/:${property}`
  const res = await fetch(todoUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      updateValue: value
    })

  })
  return res
}

export async function deleteTodos (todo) {
  const todoUrl = `http://localhost:3000/deleteTodos/:${todo.id}`
  const res = await fetch(todoUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res
}
