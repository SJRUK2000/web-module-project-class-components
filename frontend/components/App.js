import React from 'react'

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
          completed: false
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
        <ul>
          {
            todos.map(todo => {
              return (<li>{todo.name} { todo.completed ? <span>- completed</span> : <span> </span> }</li>)
            })
          }  
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
