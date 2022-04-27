import React from "react";

// Para hacer el error mas inteligente le pasamos un prop "mensaje" que indica en que pantalla estamos teniendo el error.
const Error = ({mensaje}) => <p className="alert alert-danger error">{mensaje}</p>;

export default Error;
