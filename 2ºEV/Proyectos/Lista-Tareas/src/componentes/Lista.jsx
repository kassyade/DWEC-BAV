import React from 'react';

const Lista = ({ tareas }) => {
  return (
    <div>
      <h3>Lista de Tareas</h3>
      <ul>
        {tareas.length === 0 ? (
          <p>No hay tareas aún.</p>
        ) : (
          tareas.map((tarea, index) => (
            <li key={index}>
              <strong>{tarea.titulo}:</strong> {tarea.descripcion}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Lista;
