import "./App.css";
import freeCodeCampLogo from "./images/NIKE.png";
import Boton from "./components/boton";
import Pantalla from "./components/pantalla";
import Clear from "./components/clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const addInput = (valor) => {
    setInput(input + valor);
  };
  const result = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar calculos.")
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>%</Boton>
          <Boton manejarClic={addInput}>/</Boton>
        </div>
        <div className="fila">
          <Clear manejarClear={() => setInput("")}>Clear</Clear>
          <Boton manejarClic={result}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
