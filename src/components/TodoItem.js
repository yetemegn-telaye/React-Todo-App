import React from "react";


class TodoItem extends React.Component {
    render(){
        return (
        <li>
          <input type="checkbox" checked={this.props.todo.completed} 
          onChange={()=>this.props.handleChangeProps(this.props.todo.id)} /> 
          {this.props.todo.title}
          <button type="button" onClick={()=>this.props.delTodoProps(this.props.todo.id)}>Delete</button>
        </li>
        );
    }
}

export default TodoItem;