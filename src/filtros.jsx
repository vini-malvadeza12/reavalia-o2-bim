import React from "react";

const daysOfWeek = ["", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const subjects = ["", "Matemática", "História", "Física", "Português"];

function filtro({ setFilterDay, setFilterSubject }) {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setFilterDay(e.target.value)}>
        <option value="">Filtrar por dia</option>
        {daysOfWeek.map((day, i) => (
          <option key={i} value={day}>{day || "Todos os dias"}</option>
        ))}
      </select>
      <select onChange={(e) => setFilterSubject(e.target.value)}>
        <option value="">Filtrar por matéria</option>
        {subjects.map((subj, i) => (
          <option key={i} value={subj}>{subj || "Todas as matérias"}</option>
        ))}
      </select>
    </div>
  );
}

export default filtro;