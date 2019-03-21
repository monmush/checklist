import React, { Component } from 'react';
import '../styles/Export.scss';
import Checklist from '../components/ChecklistBoxes/ChecklistBoxes';
import AddFunction from '../components/AddFunction/AddFunction';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Grid">
      <h1 id="title">Checklist for M&M</h1>
        <AddFunction/>
        <Checklist/>
      </div>
      </div>  
    );
  }
}

export default App;
