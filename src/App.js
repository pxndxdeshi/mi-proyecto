import React, { useState } from 'react';
import TaskItem from './TaskItem';

// El nombre de la función debe coincidir con la importación en index.js
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Lógica para agregar tarea
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  // Lógica para eliminar tarea
  const handleDeleteTask = (index) => {
    // Filtra el array, manteniendo solo los elementos que NO están en el índice a eliminar
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: 20, border: '1px solid #ccc' }}>
      <h1>✅ Lista de tareas pendientes FUNCIONAL ✅</h1> 
      
      {/* Input y Botón de Agregar */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
      
      {/* Renderizado de la lista */}
      <ul>
        {tasks.map((t, index) => (
          <TaskItem 
            key={index}            
            task={t}               
            index={index}          
            onDelete={handleDeleteTask} // Pasa la función como Prop
          />
        ))}
      </ul>
    </div>
  );
}

// Exportación por defecto obligatoria
export default App;