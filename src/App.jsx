import React, { useState } from "react"
import ToDoForm from "./ToDoForm"
import ToDoList from "./ToDoList";
import "./index.css"


function App() {
  const [toDos, setToDos] = useState([]);
  const [editID, setEditId] = useState(null);

  const addTodo = (newTask) => {
    if (editID) {
      setToDos(toDos.map(todo => todo.id === editID ? { ...todo, text: newTask } : todo));
      setEditId(null);
    } else {
      setToDos([...toDos, { text: newTask, completed: false }]);
    }
  };
  const deleteHandler = (id) => {
    const taskToEdit = toDos.find(todo => todo.id === id);
    if (taskToEdit) {
      setEditId(id);
    }
  };
  const editHandler = (id) => {
    const taskToEdit = toDos.find(todo => todo.id === id);
    if (taskToEdit) {
      setEditId(id);
    }

  };

  return (
    <div class="container">
      <h1>TODO LIST!</h1>
      <ToDoForm addToDo={addTodo} />
      <ToDoList toDos={toDos} editHandler={editHandler} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App
