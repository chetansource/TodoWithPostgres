import { fetchTodos } from './fetch.js'
const todoArray = await fetchTodos()
console.log(todoArray)
// showTodo()

// console.log('hi')
// fetch('http://localhost:3000/todos')
// const todos = await fetch()
// const data = await todos.text()
// console.log(data)
// console.log('Hi')
// // const button = document.getElementById('submitTodo')
// // button.addEventListener('click', (event) => {
// //   event.preventDefault()
// //   const input = document.getElementById('inputText')
// //   if (input.value.length !== 0) {
// //     todoArray.push({ id: todoID, text: input.value })
// //     todoID++

// //     input.value = '' // setting the input value to empty after submit

// //     showTodo()
// //     updateLocalStorage()
// //   }
// // })

// function showTodo () {
//   const todoContainer = document.querySelector('.todoContainer')
//   todoContainer.textContent = ''
//   todoArray.forEach((todo) => {
//     todoContainer.appendChild(createDivElement(todo))
//   })
// }

// function createDivElement (todo) {
//   const elementDiv = document.createElement('div')
//   elementDiv.id = todo.id
//   elementDiv.className = 'firstDiv'

//   const textInput = addTextInput(todo)
//   const checkBox = addCheckBox(todo)
//   const properties = addProperties(todo)

//   elementDiv.appendChild(textInput)
//   elementDiv.appendChild(checkBox)
//   elementDiv.appendChild(properties)

//   elementDiv.addEventListener('click', (event) => {
//     const element = event.target.tagName
//     const element1 = event.target.className
//     if (element === 'TEXTAREA' || element === 'SELECT' || element1 === 'add-date' || element1 === 'addCheck') { return }
//     if (properties.style.display === 'none') {
//       properties.style.display = 'block'
//     } else {
//       properties.style.display = 'none'
//     }
//   })

//   return elementDiv
// }

// function addTextInput (todo) {
//   const newTodo = document.createElement('input')
//   newTodo.type = 'text'
//   newTodo.value = todo.text
//   newTodo.id = 'input' + String(todo.id)
//   newTodo.className = 'todo-title'
//   // newTodo.style.backgroundColor = 'blue'
//   newTodo.addEventListener('change', () => {
//     todo.text = newTodo.value
//     updateLocalStorage()
//   })
//   return newTodo
// }

// function addCheckBox (todo) {
//   const checkBox = document.createElement('input')
//   checkBox.type = 'checkbox'
//   checkBox.className = 'addCheck'
//   if (todo.checkBox) {
//     checkBox.checked = todo.checkBox
//   }
//   // console.log(checkBox.checked)
//   checkBox.addEventListener('change', () => {
//     todo.checkBox = checkBox.checked
//     const element = document.getElementById('input' + String(todo.id))
//     if (todo.checkBox === true) {
//       element.style.textDecoration = 'line-through'
//     } else {
//       element.style.textDecoration = 'none'
//     }
//     updateLocalStorage()
//   })
//   return checkBox
// }

// function addProperties (todo) {
//   const textArea = addTextArea(todo)
//   const addDateLabel = createDateLabel(todo)
//   const addDate = createDate(todo)
//   const priorityLabel = addPriorityLabel(todo)
//   const priority = addPriority(todo)
//   const deleteBtn = createDeleteBtn(todo)

//   const hideDiv = document.createElement('div')
//   hideDiv.className = 'hideDiv'
//   hideDiv.style.display = 'none'

//   hideDiv.appendChild(textArea)
//   hideDiv.appendChild(addDateLabel)
//   hideDiv.appendChild(addDate)
//   hideDiv.appendChild(priorityLabel)
//   hideDiv.appendChild(priority)
//   hideDiv.appendChild(deleteBtn)

//   return hideDiv
// }

// function addTextArea (todo) {
//   const textArea = document.createElement('textarea')
//   textArea.placeholder = 'Notes'
//   textArea.className = 'text-area'
//   if (todo.textArea !== undefined) {
//     textArea.value = todo.textArea
//   }
//   textArea.addEventListener('change', () => {
//     todo.textArea = textArea.value
//     updateLocalStorage()
//   })

//   return textArea
// }

// function createDateLabel (todo) {
//   const dateLabel = document.createElement('label')
//   dateLabel.textContent = 'Due Date:'
//   dateLabel.className = 'dateLabel'
//   dateLabel.setAttribute('for', 'date' + String(todo.id))
//   return dateLabel
// }

// function createDate (todo) {
//   const dateInput = document.createElement('input')
//   dateInput.type = 'date'
//   dateInput.className = 'add-date'
//   dateInput.id = 'date' + String(todo.id)
//   if (todo.dateInput !== undefined) {
//     dateInput.value = todo.dateInput
//   } else {
//     dateInput.valueAsDate = new Date()
//     todo.dateInput = dateInput.value
//   }
//   dateInput.addEventListener('change', () => {
//     todo.dateInput = dateInput.value
//     updateLocalStorage()
//   })
//   return dateInput
// }
// function addPriorityLabel (todo) {
//   const priorityLabel = document.createElement('label')
//   priorityLabel.textContent = 'priority:'
//   priorityLabel.className = 'priorityLabel'
//   priorityLabel.setAttribute('for', 'priority' + String(todo.id))
//   return priorityLabel
// }

// function addPriority (todo) {
//   const items = ['None', 'High', 'Medium', 'Low']
//   const Priority = document.createElement('select')
//   Priority.className = 'prior'
//   Priority.id = 'prior' + String(todo.id)
//   for (let i = 0; i < items.length; i++) {
//     const element = items[i]
//     const options = document.createElement('option')
//     options.textContent = element
//     Priority.appendChild(options)
//   }
//   if (todo.Priority !== undefined) {
//     Priority.value = todo.Priority
//   }
//   Priority.addEventListener('change', () => {
//     todo.Priority = Priority.value
//     updateLocalStorage()
//   })
//   return Priority
// }

// function createDeleteBtn (todo) {
//   const deleteBtn = document.createElement('button')
//   deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
//   deleteBtn.className = 'Delete'
//   const delID = todo.id
//   deleteBtn.addEventListener('click', () => {
//     document.getElementById(delID).remove()
//     todoArray = todoArray.filter(i => i.id !== delID)
//     updateLocalStorage()
//   })
//   return deleteBtn
// }
