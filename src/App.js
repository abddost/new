import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reactotron from 'reactotron-react-js'
import Children from './Children';

class App extends React.Component {
  state={
    value: 'doston'
  }
  setValue = () =>{
    this.setState({
      value: 'sdsds'
    })
  }
  componentDidUpdate(){
    console.log('app-updated');
    
  }
  render(){
    console.log('app-render');
    
    return (
      <div className="App">
        <Children value={this.state.value} />
        <button
          onClick={this.setValue}
        >
          change word
        </button>
      </div>
    )
  }
}

export default App;
