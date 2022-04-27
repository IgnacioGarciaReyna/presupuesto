import React, { Fragment, useState } from "react";
//Importamos el error
import Error from './Error'

const Pregunta = () => {
  //Definimos el state
  //Como es una cantidad, la iniciamos en cero.
  const [cantidad, guardarCantidad] = useState(0);
  //El valor inicial es false para indicar que no hay error al incio.
  const [error, guardarError] = useState(false);

  //Función que lee el presupuesto
  //Para acceder a los valores del evento usamos e.
  const definirPresupuesto = (e) => {
    //Si escribimos solo e.target.value nos devuelve un string, pero nosotros queremos un número, por eso usamos parseInt
    guardarCantidad(parseInt(e.target.value), 10);
  };

  //Submit para definir el presupuesto
  //Usamos e para poner el preventDefault y evitar que recargue la página y envie los datos a otro lado.
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    //Requerimos una cantidad valida
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //Que pasa si pasa la validación?
    guardarError(false);
  };

  return (
    //Utilizamos un fragment porque vamos a retornar un form.
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
    {/* Ternario para mostrar mensaje de error.
    Para hacer el error mas inteligente le pasamos un prop "mensaje" que indica en que pantalla estamos teniendo el error.*/}
    { error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

      <form
        //Agregamos el onSubmit
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          //Agregamos el onChange para enterarnos cuando cambia el input.
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
