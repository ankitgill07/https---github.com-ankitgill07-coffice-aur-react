import React from "react"
import { TodoPrivder } from "./todoContext"
import { useState } from "react"
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import Todoitems from "../../13todocontext/src/components/Todoitems";
function App() {
const [todos , setTodos] = useState([]);

const addValue = (todo) => {
setTodos((prev) => [{id: Date.now() , ...todo} , ...prev])
}
const updateValue = (id , todo) => {
setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
}
const deleteTodo = (id) => {
setTodos((prev) => prev.filter((todo) => todo.id !== id ))
}
const toggleComplete = (id) => {
setTodos((prev) => prev.map((comp) => comp,id === id ? {...comp , complete: !comp.complete}:  comp))
}
useEffect(() => {
const todos = JSON.parse(localStorage.getItem("todo"))
if(todos && todos.length > 0){
setTodos(todos)
}
}, [])
useEffect(() => {
localStorage.setItem("todo", JSON.stringify(todos))
}, [todos])
  return (
    <TodoPrivder value={{todos , addValue , updateValue , deleteTodo , toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       {todos.map((todo) => (
                        <div key={todo.id} className="w-full">
                          <Todoitems todo={todo}/>
                        </div>
                       ))}
                    </div>
                </div>
            </div>
    </TodoPrivder>
  )
}

export default App
