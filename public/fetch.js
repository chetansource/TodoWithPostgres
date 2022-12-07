export async function fetchTodos () {
  const todosUrl = 'http://localhost:3000/todos'
  const response = await fetch(todosUrl)
  // console.log(response.statusText)
  const data = await response.json()
  // console.log(data)
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
  // console.log(res)
  return res
}
