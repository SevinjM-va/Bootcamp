
import './App.css';
import BuggyCounter from './Component/BuggyCounter';
import ErrorBoundary from './Component/ErrorBoundary'
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
  return (
    <div className="App">
      <ErrorBoundary>
      <BuggyCounter/>
      </ErrorBoundary>
    </div>
  );
}};

export default App;

