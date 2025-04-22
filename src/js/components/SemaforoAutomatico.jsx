
import React, { useState, useEffect } from "react";

const SemaforoAutomatico = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (color === "red") setColor("yellow");
      else if (color === "yellow") setColor("green");
      else setColor("red");
    }, 3000);

    return () => clearInterval(intervalo);
  }, [color]);

  const claseRojo = color === "red" ? "luz rojo activo" : "luz rojo";
  const claseAmarillo = color === "yellow" ? "luz amarillo activo" : "luz amarillo";
  const claseVerde = color === "green" ? "luz verde activo" : "luz verde";

  return (
    <div className="semaforo">
      <h3>Semáforo Automático</h3>

      <div className="luces">
        <div className={claseRojo}></div>
        <div className={claseAmarillo}></div>
        <div className={claseVerde}></div>
      </div>
    </div>
  );
};

export default SemaforoAutomatico;
