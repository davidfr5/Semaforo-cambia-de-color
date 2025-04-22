import React from "react";
import SemaforoAutomatico from "./js/components/SemaforoAutomatico";
import SemaforoManual from "./js/components/SemaforoManual";
import "./index.css";

const App = () => {
  return (
    <div className="contenedor-app">
      <SemaforoAutomatico />
      <SemaforoManual />
    </div>
  );
};

export default App;
