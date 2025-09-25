import React, { useState } from 'react';
import TaskItem from './TaskItem';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };

  // El componente retorna el HTML/JSX visible
  return (
    <div style={{ padding: 20 }}>
      <h1>To-Do List Funcional</h1>
      
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
      
      <ul>
        {tasks.map((t, index) => (
          <TaskItem 
            key={index}            
            task={t}               
            index={index}          
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

// Exportación obligatoria
export default App;