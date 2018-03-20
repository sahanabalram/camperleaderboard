import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Table from "./components/Table";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Table/>
      </div>
    );
  }
}

export default App;
