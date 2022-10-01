class TodoList {
  constructor() {
    this.id = 1
    this.task = []
  }

  getAllTasks() {
    return this.task
  }

  create(taskName) {
    const newTask = {
      id: this.id,
      text: taskName,
      completed: false
    }
    this.task.push(newTask)
    this.id++
    return this.getAllTasks()
  }

  setComplete(id) {
    let locatedTask = false
    for (let i = 0; i < this.task.length; i++) {
      const currentTask = this.task[i]
      if (currentTask.id === id) {
        locatedTask = currentTask
      }
    }
    if (locatedTask !== false) {
      locatedTask.completed = true
    }
    return locatedTask
  }

  getComplete() {
    return this.task.find((todoItem) => todoItem.completed === true)
  }

  getIncomplete() {
    return this.task.find((todoItem) => todoItem.completed === false)
  }

  findById(id) {
    const foundItem = this.task.find((todoItem) => todoItem.id === id)
    if (foundItem) {
      return foundItem
    } else {
      return `This task doesn't exist`
    }
  }

  removeById(id) {
    // (move one index back the array, delete one)
    return this.task.splice(id--, 1)
  }
}

module.exports = TodoList
