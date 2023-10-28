import React, { useState } from 'react';

const App = () => {
    // Estado para almacenar las notas
    const [notas, setNotas] = useState([]);
  
    // Función para agregar una nueva nota
    const agregarNota = (texto) => {
      setNotas([...notas, texto]);
    };
  
    // Función para eliminar una nota
    const eliminarNota = (indice) => {
      const nuevasNotas = notas.filter((_, i) => i !== indice);
      setNotas(nuevasNotas);
    };
return (
    <div>
      <h1>Proyecto 06-Lista de Tareas</h1>
      <div>
        <h3> Formulario para agregar nuevas notas </h3> 
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const texto = e.target.nuevaNota.value;
            agregarNota(texto);
            e.target.nuevaNota.value = '';
          }}
        >
          <input type="text" name="nuevaNota" />
          <button type="submit">Agregar Nota</button>
        </form>
      </div>
      <div>
        <h3> Lista de notas </h3>
        <ul>
          {notas.map((nota, indice) => (
            <li key={indice}>
              {nota}
              <button onClick={() => eliminarNota(indice)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
