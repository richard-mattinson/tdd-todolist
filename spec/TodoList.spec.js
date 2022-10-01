/* For each requirement below, write a single test and pass it by writing source code. Repeat until you have implemented all requirements. */

/*
- DONE Create a todo item that has an ID, text description, and starts off incomplete
- DONE Get all todo items
- DONE Set a todo completed by its ID
- DONE Get only todo items that are incomplete
- DONE Get only todo items that are complete
- DONE Search and return a todo item by its ID, or return a message saying it doesn’t exist
- DONE Remove a todo item by its ID
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

  it('get only todo items that are incomplete', () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 2,
      text: 'Make sense of JavaScript!',
      completed: false
    }
    // execute
    todoList.create('Fill up the cold brew jug!')
    todoList.create('Make sense of JavaScript!')
    todoList.create('Go 2-0 on Kombat League!')
    todoList.setComplete(1, 3)
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expected)
  })

  it('get only todo items that are complete', () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 2,
      text: 'Make sense of JavaScript!',
      completed: true
    }
    // execute
    todoList.create('Fill up the cold brew jug!')
    todoList.create('Make sense of JavaScript!')
    todoList.create('Go 2-0 on Kombat League!')
    todoList.setComplete(2)
    const result = todoList.getComplete()
    // verify
    expect(result).toEqual(expected)
  })

  it('Search and return a todo item by its ID...', () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 2,
      text: 'Make sense of JavaScript!',
      completed: false
    }
    // execute
    todoList.create('Fill up the cold brew jug!')
    todoList.create('Make sense of JavaScript!')
    todoList.create('Go 2-0 on Kombat League!')
    const result = todoList.findById(2)
    // verify
    expect(result).toEqual(expected)
  })

  it(`...or return a message saying it doesn't exist`, () => {
    // set up
    const todoList = new TodoList()
    const expected = `This task doesn't exist`
    // execute
    todoList.create('Fill up the cold brew jug!')
    todoList.create('Make sense of JavaScript!')
    todoList.create('Go 2-0 on Kombat League!')
    const result = todoList.findById(5)
    // verify
    expect(result).toEqual(expected)
  })

  it(`Remove a todo item by its ID`, () => {
    // set up
    const todoList = new TodoList()
    const expected = [
      {
        id: 2,
        text: 'Make sense of JavaScript!',
        completed: false
      }
    ]
    // execute
    todoList.create('Fill up the cold brew jug!')
    todoList.create('Make sense of JavaScript!')
    todoList.create('Go 2-0 on Kombat League!')
    const result = todoList.removeById(1, 3)
    // verify
    expect(result).toEqual(expected)
  })
})
