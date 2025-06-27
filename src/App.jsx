import React, { useState } from "react";
import formulário from "./components/formulário";
import lista from "./components/lista";
import filtros from "./components/filtros";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterDay, setFilterDay] = useState("");
  const [filterSubject, setFilterSubject] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    return (
      (filterDay === "" || task.days.includes(filterDay)) &&
      (filterSubject === "" || task.subject === filterSubject)
    );
  });

  return (
    <div className="app-container">
      <h1>Checklist de Estudos</h1>
      <TaskForm addTask={addTask} />
      <FilterBar
        setFilterDay={setFilterDay}
        setFilterSubject={setFilterSubject}
      />
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;