import React from "react";
import CSS from 'csstype';
import { TodoType } from "../types/Todo.types";

interface Props{
    todo:TodoType;
    index: number;
    handleCompleted: (id: number) => void
    handleDelete: (id: number) => void
}

const TodoStyle: React.CSSProperties = {
    textDecoration: 'line-through'
}


const Todo:React.FC<Props> = ({todo,index,handleCompleted,handleDelete}) => {
    return (
    <div className="todo" style={{textDecoration: todo.completed ? 'line-through' : ''}}> 
        {todo.title}
        <div className="">
            <button 
            onClick={() => handleCompleted(index)}
             >{todo.completed ? 'Incompleted' : 'Complete'}</button>

            <button 
            style={{ color:'red' }}
            onClick={() => handleDelete(index)}
             >Delete</button>
        </div>
    
    </div>
    );
}

export default Todo