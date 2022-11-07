import React from "react";
import TodoItem from "./TodoItem";


class TodoList extends React.Component {
    render(){
        return(
            <ul>
                {this.props.todos.map(todo=>(
                    <TodoItem id={todo.id} todo={todo}/>
                ))}
            </ul>
        )
    }
}

export default TodoList;