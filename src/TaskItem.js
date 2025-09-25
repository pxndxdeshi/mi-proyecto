import React from 'react';

function TaskItem({ task, onDelete, index }) {
  return (
    <li>
      {task}
      {/* Llama a la función del padre para eliminar la tarea */}
      <button onClick={() => onDelete(index)}>Eliminar</button>
    </li>
  );
}

// Exportación por defecto obligatoria
export default TaskItem;