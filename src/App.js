//Creamos un state para el presupuesto y otro para el presupuesto restante, lo creamos acá porque estos dos van a fluir al menos en dos componentes.
import React, { useState } from "react";
import Pregunta from "./components/Pregunta";

function App() {
  //Definición del state
  //Para que se llenen debemos pasarselo a la pregunta.
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
          //Le pasamos las props
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
