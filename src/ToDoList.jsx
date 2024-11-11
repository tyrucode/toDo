import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const ToDoList = ({ toDos, editHandler, deleteHandler }) => {
    console.log(toDos);
    return (
        <>
            <ul>
                {toDos.map((todo, index) => (
                    <li key={todo.id || index}>
                        <span>{todo.text}</span>
                        <div className="todo-buttons">
                            <EditButton todoId={todo.id} editHandler={editHandler} />
                            <DeleteButton todoId={todo.id} deleteHandler={deleteHandler} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;