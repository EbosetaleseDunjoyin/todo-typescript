import React from "react";

interface Props{
    handleSubmit: (value: string) => void;
}

const formStyle : React.CSSProperties = {
    display:'flex',
    justifyContent:'center'

}

const TodoForm: React.FC<Props> = ({handleSubmit}) =>{
    const [Inputvalue, setInputvalue] = React.useState<string>('')

    return (
        <div style={formStyle}>
             <form 
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(Inputvalue);
                setInputvalue('');
            }}>
            <input 
            type="text" 
            className="todo" 
            value={Inputvalue} 
            placeholder="Add new todo"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInputvalue(e.target.value)}}
            />
        </form>
        </div>
       
    );
}

export default TodoForm