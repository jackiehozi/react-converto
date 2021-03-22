import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Convertisseur() {
  const [salaire, setSalaire] = useState(0);

  function handleChange(e) {
    setSalaire(e.target.value);
  }
  function convert(salaire) {
    return (salaire * 0.73).toFixed(2);
  }

  return (
    <div>
      <input type="text" value={salaire} onChange={handleChange} />
      <p>
        {" "}
        {salaire} est l'équivalent de {convert(salaire)} net annuel{" "}
      </p>
    </div>
  );
}

function Monthly() {
  const [mois, setMois] = useState(0);

  function handleChange(a) {
    setMois(a.target.value);
  }
  function convertir(mois) {
    return (mois * 0.23).toFixed(2);
  }

  return (
    <div>
      <input type="text" value={mois} onChange={handleChange} />
      <p>
        {" "}
        {mois} est l'équivalent de {convertir(mois)} net mensuel{" "}
      </p>
    </div>
  );
}

function Rendu() {
  return (
    <div className="item">
      Rentrez votre salaire brut annuel
      <Convertisseur />
      Calculons le mensuel
      <Monthly />
    </div>
  );
}
ReactDOM.render(<Rendu />, document.getElementById("root"));
