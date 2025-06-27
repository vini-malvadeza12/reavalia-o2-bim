import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const daysOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const subjects = ["Matemática", "História", "Física", "Português"];

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [subject, setSubject] = useState("");

  const toggleDay = (day) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !subject || selectedDays.length === 0) return;

    const newTask = {
      id: uuidv4(),
      title,
      description,
      days: selectedDays,
      subject,
      completed: false
    };

    addTask(newTask);
    setTitle("");
    setDescription("");
    setSelectedDays([]);
    setSubject("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="days-selector">
        {daysOfWeek.map(day => (
          <label key={day}>
            <input
              type="checkbox"
              checked={selectedDays.includes(day)}
              onChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
      <select
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      >
        <option value="">Selecione uma matéria</option>
        {subjects.map((subj, i) => (
          <option key={i} value={subj}>{subj}</option>
        ))}
      </select>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default TaskForm;