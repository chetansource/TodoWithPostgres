export async function fetchTodos () {
    const todosUrl = 'http://localhost:3000/todos'
    const response = await fetch(todosUrl)
    console.log(response.statusText)
    const data = await response.json()
    console.log(data)
    return data
  }
  