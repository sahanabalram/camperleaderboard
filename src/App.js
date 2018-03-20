import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import TableContainer from "./components/Table";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <TableContainer/>
      </div>
    );
  }
}

export default App;
