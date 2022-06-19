//Creamos un state para el presupuesto y otro para el presupuesto restante, lo creamos acá porque estos dos van a fluir al menos en dos componentes.
import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  //Definición del state
  //Para que se llenen debemos pasarselo a la pregunta.
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  //State para carga condicional
  //Inicia como true, porque cuando arranca la página queremos que aparezca
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //Función que se ejecutará cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {/* Utilizamos un ternario para mostrar un componente u otro */}
          {mostrarPregunta ? (
            <Pregunta
              //Le pasamos las props
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarNuevoGasto={agregarNuevoGasto} 
                />
              </div>

              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
