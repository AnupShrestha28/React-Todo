import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      list : [],
      addTodo : ""
    }
  }

  componentDidMount(){
    const storedData = localStorage.getItem("todoList");
    if(storedData){
      this.setState({list : JSON.parse(storedData)})
    }
  }

  componentDidUpdate(prevState){
    if(prevState.list !== this.state.list){
      localStorage.setItem("todoList", JSON.stringify(this.state.list))
    }

  }

  inputText = (e) => {
    this.setState({addTodo : e.target.value});
  }

  buttonAddTodo = (e) => {
    e.preventDefault();
  }

  render() {
    const{list, addTodo} = this.state;

    return (
      <div>
        <form onSubmit={this.buttonAddTodo}>
          <input type='text' placeholder='Enter your todo' value={addTodo} onChange={this.inputText} />
          <button onClick={() => {
            const {list, addTodo} = this.state;
            this.setState({list : [...list, addTodo], addTodo : ""})
          }}>Add</button>
        </form>

          <ul>
            {list?.map((lists, index) => <li key={index}>{lists}</li>)}
          </ul>

      </div>
    )
  }
}
