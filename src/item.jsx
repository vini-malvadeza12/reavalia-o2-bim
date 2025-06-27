import React from "react";

function item({ task, onToggleComplete, onDelete }) {
  return (
    <li className={`item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Matéria:</strong> {task.subject}</p>
      <p><strong>Dias:</strong> {task.days.join(", ")}</p>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "Desmarcar" : "Concluir"}
      </button>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
        Remover
      </button>
    </li>
  );
}

export default item;