import React from "react";
import item from "./item";

function lista({ tasks, onToggleComplete, onDelete }) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="lista">
      {tasks.map(task => (
        <item
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default lista;