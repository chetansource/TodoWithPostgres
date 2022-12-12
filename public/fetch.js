export async function fetchTodos () {
  const todosUrl = 'http://localhost:3000/todo'
  const response = await fetch(todosUrl)
  const data = await response.json()
  return data
}
export async function insertTodo (input) {
  const todoUrl = 'http://localhost:3000/addTodo'
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

export async function updateTodo (property, value, todo) {
  const todoUrl = `http://localhost:3000/updateTodo/${todo.id}/${property}`
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

export async function deleteTodo (todo) {
  const todoUrl = `http://localhost:3000/deleteTodo/${todo.id}`
  const res = await fetch(todoUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res
}

export async function deleteDone () {
  const todoUrl = 'http://localhost:3000/deleteDone'
  const res = await fetch(todoUrl, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  // console.log(res.status)
  return res.status
}

export async function deleteAll () {
  const todoUrl = 'http://localhost:3000/deleteAll'
  const res = await fetch(todoUrl, {
    method: 'DELETE'
  })
  return res.status
}
export async function showCompleted () {
  const todoUrl = 'http://localhost:3000/showCompleted'
  const res = await fetch(todoUrl)
  const data = await res.json()
  // console.log(data)
  return data
}
export async function pending () {
  const todoUrl = 'http://localhost:3000/Pending'
  const res = await fetch(todoUrl)
  const data = await res.json()
  // console.log(data)
  return data
}
