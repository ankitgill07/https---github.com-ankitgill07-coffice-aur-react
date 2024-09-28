import { createContext , useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            todo: "task 1",
            id: 1,
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updataTodo:  (todo , id) => {},
    deleteTodo: (id) => {},
    togglecompletle: (id) => {},
})

export const useTodo = () =>{
return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider