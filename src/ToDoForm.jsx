import React, { useState } from "react";

const ToDoForm = ({ addToDo }) => {
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length < 3) {
            alert("Task must be at least 3 characters long.");
            return;
        }
        addToDo(input);
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type New Task Here!"
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default ToDoForm