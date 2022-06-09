class TodoList {
  constructor() {
    this.id = 1
    this.task = []
  }

  // Create method
  create(taskName) {
    const newTask = {
      id: this.id,
      text: taskName,
      completed: false
    }
    this.id++

    this.task.push(newTask)
    return newTask
  }

  taskCompleted(id) {
    let locatedTask = false
    for (let i = 0; i < this.task.length; i++) {
      let currentTask = this.task[i]
      if (currentTask.id === id) {
        locatedTask = currentTask
      }
    }
    if (locatedTask !== false) {
      locatedTask.completed = true
    }
    return locatedTask
  }
}

module.exports = TodoList
