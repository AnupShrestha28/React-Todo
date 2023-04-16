import React from "react";

class Todo extends React.Component{

    constructor(){
        super();
        this.state = {
            list : [],
            addTodo : ""
        };
    }

    inputText = (e) => {
        this.setState({addTodo:e.target.value});
    }

    buttonAddTodo = (e) =>{
        e.preventDefault();
    }

    render(){
        const {list,addTodo} = this.state;
        return(
            <>
                <h1>{this.props.title}</h1>
                <form className="form-info" onSubmit={this.buttonAddTodo}>
                    <input type="text" placeholder="Enter your todo" value={addTodo} onChange={this.inputText}/>
                    <button className="btn-info" onClick={() => {
                        const{list, addTodo} = this.state;
                        this.setState({list:[...list,addTodo], addTodo:""})
                    }}>Add</button>
                </form>
                <ul>
                    {list.map((lists, index) => <li className="list-info" key={index}>{lists}</li>)}
                </ul>
            </>
        );
    }
}

export default Todo;