import React from 'react';
import './App.css';
import ReactRouterApp from './with-react-router';
import ModalApp from './with-modal';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModalApp:false,
      showRouterApp:false
    }
  }
  render() {
    return (
      <div>
        <div>Flazzle Example App - <span style={{color:'blue', cursor:'pointer'}}onClick={() => this.setState({showModalApp:false,showRouterApp:false})}>Reset App</span></div>
        <div>
          {
            this.state.showModalApp 
              ? <ModalApp /> 
              : this.state.showRouterApp 
              ? <ReactRouterApp /> 
              : <div><button onClick={() => this.setState({showModalApp:true})}>Show Modal Example</button><button onClick={() => this.setState({showRouterApp:true})}>Show ReactRouter Example</button> </div>
          }
        </div>
    </div>
    );
  }
}