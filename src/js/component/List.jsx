import React, { useState } from "react";

export const List = () => {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])
    
    const createTodo = (e) => {
        if (e.key === "Enter") {
            setTodo((previous) => {
                const newTodo = value;
                const newList = [...previous, newTodo].filter((item) => item);
                return newList;
            });
            setValue("")
        }
    }

    return (
        <div className="container rounded">
            <ul>
                <input
                type="text"
                placeholder="Lista de tareas"
                onChange = {(e) => setValue(e.target.value)}
                value= {value}
                onKeyUp= {createTodo}
                />
                {
                    todo.map((item)=>(
                        <li>
                            {item}
                            <i onClick={()=>setTodo((previous)=>{
                                const newList = previous.filter(element => element !== item)
                                return newList
                            })}
                            className="icon fa-solid fa-x">
                            </i>
                        </li>
                    ))
                }
            </ul>
        </div>


    )
}