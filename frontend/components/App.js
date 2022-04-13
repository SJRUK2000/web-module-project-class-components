import React from 'react'
import TodoList from './TodoList';
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Personal Training',
          id: 1528817077290, // could look different, you could use a timestamp to generate it
          completed: true
        },{
          name: 'Learn React',
          id: 1528817077294, // could look different, you could use a timestamp to generate it
          completed: true
        },
      ]
    }
  }

  handleAdd = (name) => {

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

handleClear = () => {
    // set state 
  this.setState({
    ...this.state, 
    // loop through all todos
  todos:this.state.todos.filter(todo => {
  // remove all todos that have completion = false
  //save filtered todos to state
    return (todo.completed === false);
  })
})
}

handleToggle = (clickedId) => {

  this.setState({
    ...this.state,
    todos: this.state.todos.map(todo=> {
      if (todo.id === clickedId) {
        return {
          ...todo,
          completed: !todo.completed
        } 
      }
        return todo
    })
  })
}

  render() {
    const {todos} = this.state;

    return (
      <div>
        <TodoList handleToggle={this.handleToggle}todos={todos}/>
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
