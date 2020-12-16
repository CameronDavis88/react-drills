import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      filterStr: '',
        array: ['bat', 'hat', 'that']
    }
  }
  handleChange(val){
    this.setState({filterStr: val})
  }

  render() {
    let showArr = this.state.array.filter((e) => {
        return e.includes(this.state.filterStr);
      })
      .map((e) => {
        return <h2>{e}</h2>
      })

    return(
          <div className='App'>
            <input onChange={e => this.handleChange(e.target.value)} />
            {showArr}
          </div>
    )
  }
    
}


export default App;


