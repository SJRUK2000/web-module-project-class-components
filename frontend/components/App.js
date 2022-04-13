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

  render() {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <Form />

        <button>Clear</button>
      </div>
    )
  }
}
