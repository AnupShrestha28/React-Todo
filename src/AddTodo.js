import React from "react";

class AddTodo extends React.Component{

    constructor(){
        super();
        this.state = {
            list : [],
            addTodo : ""
        };
    }

    inputText = (e) =>{
        this.setState({addTodo : e.target.value});
    }

    buttonAddTodo =(e) => {
        e.preventDefault();
        const{list, addTodo} = this.state;
        this.setState({list:[...list,addTodo], addTodo:""});
    }

    render(){
        const{list, addTodo} = this.state;
        return(
            <>
                <h1>{this.props.title}</h1>
                <form className="form-info" onSubmit={this.buttonAddTodo}>
                    <input type="text" placeholder="Enter your todo" value={addTodo} onChange={this.inputText}/>
                    <button className="btn-info" type="submit">Add</button>
                </form>
                <ul>
                    {list.map((lists, index) => <li className="lists-info" key={index}>{lists}</li>)}
                </ul>
            </>
        );
    }
}

export default AddTodo;