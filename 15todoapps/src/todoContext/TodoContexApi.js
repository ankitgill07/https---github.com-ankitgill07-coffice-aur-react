import { createContext , useContext } from "react";

export const TodoContex = createContext({
    todos : [
    {
    todo: "task 1",
    id: 1,
    complete : false
    }
],
addValue: (todo) => {},
updateValue: (todo , id) => {},
deleteValue: (id) => {},
toggleComplete: (id) => {}
})

export const useTodo = () =>{
return useContext(TodoContex)
}

export const TodoPrivder = TodoContex.Provider