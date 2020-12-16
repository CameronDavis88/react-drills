import React, {Component} from 'react';
import './App.css';

class App extends Component{
    constructor() {
      super()
      this.state = {
        Array: [1,2,3,4,5]
      }
    }
      render() {
        let showArray =this.state.Array.map(e => {
          return <h2>{e}</h2>
        })
        return(
          <div className='App'>{showArray}</div>
        )
      }
}

  
export default App;
