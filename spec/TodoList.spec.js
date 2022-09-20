/* For each requirement below, write a single test and pass it by writing source code. Repeat until you have implemented all requirements. */

/*
- DONE Create a todo item that has an ID, text description, and starts off incomplete
- DONE Get all todo items
- DONE Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID
*/

const TodoList = require('../src/TodoList.js')

describe('TodoList', () => {
  it('creates a todo item', () => {
    // set up
    const todoList = new TodoList()
    const expected = [
      {
        id: 1,
        text: 'Fill up the cold brew jug!',
        completed: false
      }
    ]
    // execute
    const result = todoList.create('Fill up the cold brew jug!')
    // verify
    expect(result).toEqual(expected)
  })

  it('get all tasks from the todo list', () => {
    // set up
    const todoList = new TodoList()
    const expected = [
      {
        id: 1,
        text: 'Fill up the cold brew jug!',
        completed: false
      },
      {
        id: 2,
        text: 'Make sense of JavaScript!',
        completed: false
      },
      {
        id: 3,
        text: 'Go 2-0 on Kombat League!',
        completed: false
      }
    ]
    // execute
    todoList.create('Fill up the cold brew jug!')
    todoList.create('Make sense of JavaScript!')
    todoList.create('Go 2-0 on Kombat League!')
    const result = todoList.getAllTasks()
    // verify
    expect(result).toEqual(expected)
  })

  it('set a task as completed', () => {
    const todoList = new TodoList()
    const first = {
      id: 1,
      text: 'Fill up the cold brew jug!',
      completed: true
    }
    todoList.create(first.text)
    const result = todoList.setComplete(first.id)
    expect(result).toEqual(first)
  })

  fit('get only todo items that are incomplete', () => {
    const todoList = new TodoList()
    const first = {
      id: 1,
      text: 'Fill up the cold brew jug!',
      completed: true
    }

    const second = {
      id: 2,
      text: 'Make sense of JavaScript!',
      completed: false
    }

    const third = {
      id: 3,
      text: 'Go 2-0 on Kombat League!',
      completed: true
    }
    // execute
    todoList.create(first.text, second.text, third.text)
    const result = todoList.create(second.text)
    // verify
    expect(result).toEqual(second)
  })

  it('get only todo items that are complete', () => {
    const todoList = new TodoList()
    const first = {
      id: 1,
      text: 'Fill up the cold brew jug!',
      completed: true
    }

    const second = {
      id: 2,
      text: 'Make sense of JavaScript!',
      completed: false
    }

    const third = {
      id: 3,
      text: 'Go 2-0 on Kombat League!',
      completed: true
    }
    // execute
    todoList.create(first.text, second.text, third.text)
    const result = todoList.create(first.text, third.text)
    // verify
    expect(result).toEqual(first, third)
  })
})
