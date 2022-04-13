import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li> Walk Pebbles </li> 
          <li> Clean The Kitchen</li>  
          <li> Personal Training </li>  
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
