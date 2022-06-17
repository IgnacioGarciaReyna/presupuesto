import React, { Fragment, useState } from "react";
import Error from "./Error";

//Extraemos los props
const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
  //Definimos el state
  const [cantidad, guardarCantidad] = useState(0);
  //El valor inicial es false para indicar que no hay error al incio.
  const [error, guardarError] = useState(false);

  //Función que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value), 10);
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //Que pasa si pasa la validación?
    guardarError(false);
    //Ya tenemos un presupuesto valido, tenemos el presupuesto inicial, que por el momento es también el presupuesto restante.
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false)
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {/* Ternario para mostrar mensaje de error.*/}
      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

      <form
        //Agregamos el onSubmit
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
