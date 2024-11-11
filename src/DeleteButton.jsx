import React from "react";

function DeleteButton({ todoId, deleteHandler }) {
    return (
        <button className="delete-btn" onClick={() => deleteHandler(todoId)}>
            Delete
        </button>
    );
}

export default DeleteButton;
