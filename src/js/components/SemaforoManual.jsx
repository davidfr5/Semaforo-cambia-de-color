import React, { useState } from "react";

const SemaforoManual = () => {
  const [color, setColor] = useState("red");

  const cambiarColor = () => {
    if (color === "red") setColor("yellow");
    else if (color === "yellow") setColor("green");
    else setColor("red");
  };

  // clases para cada color(luz) según el color activo
  const claseRojo = color === "red" ? "luz rojo activo" : "luz rojo";
  const claseAmarillo = color === "yellow" ? "luz amarillo activo" : "luz amarillo";
  const claseVerde = color === "green" ? "luz verde activo" : "luz verde";

  return (
    <div className="semaforo">
      <h3>Semáforo Manual</h3>

      <div className="luces">
        <div className={claseRojo}></div>
        <div className={claseAmarillo}></div>
        <div className={claseVerde}></div>
      </div>

      <button className="boton-cambiar" onClick={cambiarColor}>
        Cambiar
      </button>
    </div>
  );
};

export default SemaforoManual;
