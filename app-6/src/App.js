import React, { Component } from 'react';
import Todo from './Components/Todo'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {

    const list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })

    return (
      <div className="App">

      </div>
    );
  }
}
export default App;
