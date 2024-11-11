import React from "react";

function EditButton({ todoId, editHandler }) {
    return (
        <button className="edit-btn" onClick={() => editHandler(todoId)}>
            Edit
        </button>
    );
}

export default EditButton;
