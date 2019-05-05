import React, {Component} from 'react'

class AddItems extends Component {
  state = {
    content: ''

  }

  changeHandler = (e) => {
    this.setState({content: e.target.value});

  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.content);
    this.props.addItems(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input className="Input" id = "Input" onChange={this.changeHandler} type="Text" placeholder="Insert something to todo list"></input>
          <button type="submit" className="myButton">Enter</button>
        </form> 
      </div>
    )
  }

}
export default AddItems;