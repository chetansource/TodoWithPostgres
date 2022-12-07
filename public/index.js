import { fetchTodos, insertTodos } from './fetch.js'
let todoArray = await fetchTodos()
showTodo()

const button = document.getElementById('submitTodo')
button.addEventListener('click', async (event) => {
  event.preventDefault()
  const input = document.getElementById('inputText')
  console.log('hi')
  if (input.value.length !== 0) {
    const response = await insertTodos(input)
    if (response.status === 200) {
      todoArray = await fetchTodos()
      showTodo()
    } else {
      console.log('unable to send')
    }
    input.value = '' // setting the input value to empty after submit
  }
})

function showTodo () {
  const todoContainer = document.querySelector('.todoContainer')
  todoContainer.textContent = ''
  todoArray.forEach((todo) => {
    // console.log(todo)
    todoContainer.appendChild(createDivElement(todo))
  })
}

function createDivElement (todo) {
  const elementDiv = document.createElement('div')
  elementDiv.id = todo.id
  elementDiv.className = 'firstDiv'

  const textInput = addTextInput(todo)
  const checkBox = addCheckBox(todo)
  const properties = addProperties(todo)

  elementDiv.appendChild(textInput)
  elementDiv.appendChild(checkBox)
  elementDiv.appendChild(properties)

  elementDiv.addEventListener('click', (event) => {
    const element = event.target.tagName
    const element1 = event.target.className
    if (element === 'TEXTAREA' || element === 'SELECT' || element1 === 'add-date' || element1 === 'addCheck') { return }
    if (properties.style.display === 'none') {
      properties.style.display = 'block'
    } else {
      properties.style.display = 'none'
    }
  })

  return elementDiv
}

function addTextInput (todo) {
  const newTodo = document.createElement('input')
  newTodo.type = 'text'
  newTodo.value = todo.name
  //   console.log(todo.name)
  newTodo.id = 'input' + String(todo.id)
  newTodo.className = 'todo-title'
  // newTodo.style.backgroundColor = 'blue'
  newTodo.addEventListener('change', () => {
    todo.name = newTodo.value
    // updateLocalStorage()
  })
  return newTodo
}

function addCheckBox (todo) {
  const checkBox = document.createElement('input')
  checkBox.type = 'checkbox'
  checkBox.className = 'addCheck'
  if (todo.checkBox) {
    checkBox.checked = todo.checkBox
  }
  // console.log(checkBox.checked)
  checkBox.addEventListener('change', () => {
    todo.checkBox = checkBox.checked
    const element = document.getElementById('input' + String(todo.id))
    if (todo.checkBox === true) {
      element.style.textDecoration = 'line-through'
    } else {
      element.style.textDecoration = 'none'
    }
    // updateLocalStorage()
  })
  return checkBox
}

function addProperties (todo) {
  const textArea = addTextArea(todo)
  const addDateLabel = createDateLabel(todo)
  const addDate = createDate(todo)
  const priorityLabel = addPriorityLabel(todo)
  const priority = addPriority(todo)
  const deleteBtn = createDeleteBtn(todo)

  const hideDiv = document.createElement('div')
  hideDiv.className = 'hideDiv'
  hideDiv.style.display = 'none'

  hideDiv.appendChild(textArea)
  hideDiv.appendChild(addDateLabel)
  hideDiv.appendChild(addDate)
  hideDiv.appendChild(priorityLabel)
  hideDiv.appendChild(priority)
  hideDiv.appendChild(deleteBtn)

  return hideDiv
}

function addTextArea (todo) {
  const textArea = document.createElement('textarea')
  textArea.placeholder = 'Notes'
  textArea.className = 'text-area'
  if (todo.notes !== undefined) {
    textArea.value = todo.notes
  }
  textArea.addEventListener('change', () => {
    todo.notes = textArea.value
    // updateLocalStorage()
  })

  return textArea
}

function createDateLabel (todo) {
  const dateLabel = document.createElement('label')
  dateLabel.textContent = 'Due Date:'
  dateLabel.className = 'dateLabel'
  dateLabel.setAttribute('for', 'date' + String(todo.id))
  return dateLabel
}

function createDate (todo) {
  const dateInput = document.createElement('input')
  dateInput.type = 'date'
  dateInput.className = 'add-date'
  dateInput.id = 'date' + String(todo.id)
  if (todo.date !== undefined) {
    dateInput.value = todo.date
  } else {
    dateInput.valueAsDate = new Date()
    todo.date = dateInput.value
  }
  dateInput.addEventListener('change', () => {
    todo.date = dateInput.value
    // updateLocalStorage()
  })
  return dateInput
}
function addPriorityLabel (todo) {
  const priorityLabel = document.createElement('label')
  priorityLabel.textContent = 'priority:'
  priorityLabel.className = 'priorityLabel'
  priorityLabel.setAttribute('for', 'priority' + String(todo.id))
  return priorityLabel
}

function addPriority (todo) {
  const items = ['none', 'high', 'medium', 'low']
  const Priority = document.createElement('select')
  Priority.className = 'prior'
  Priority.id = 'prior' + String(todo.id)
  for (let i = 0; i < items.length; i++) {
    const element = items[i]
    const options = document.createElement('option')
    options.textContent = element
    Priority.appendChild(options)
  }
  if (todo.priority !== undefined) {
    Priority.value = todo.priority
    // console.log(todo.priority)
  }
  Priority.addEventListener('change', () => {
    todo.priority = Priority.value
    // updateLocalStorage()
  })
  return Priority
}

function createDeleteBtn (todo) {
  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
  deleteBtn.className = 'Delete'
  const delID = todo.id
  deleteBtn.addEventListener('click', () => {
    document.getElementById(delID).remove()
    todoArray = todoArray.filter(i => i.id !== delID)
    // updateLocalStorage()
  })
  return deleteBtn
}
