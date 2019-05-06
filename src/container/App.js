import React, {Component} from 'react';
import '../styles/Export.scss';
import Todos from '../components/Todos/Todos'
import AddItems from '../components/AddItems/AddItems'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {content: "Buy some milk", id:1},
        {content: "Buy coke", id:2},
        {content: "Buy TV", id:3}],
    }
  }


  deleteItems = (id) => {
    const items = this.state.items.filter(items=>{
      return items.id !== id
    });
    this.setState({items})
  }


  
  addItems = (item)=>{
    item.id = Math.random();
    let items = [...this.state.items, item ];
    this.setState({items});
  }

  

  render() {
    return (
      <div className="App">
      <div className="Grid">
        <h1>Todo application</h1>
        
        <AddItems addItems={this.addItems}/>
        <Todos items = {this.state.items} deleteItems={this.deleteItems}/>
        
      </div>
      </div>
    );
  }
}


export default App;
