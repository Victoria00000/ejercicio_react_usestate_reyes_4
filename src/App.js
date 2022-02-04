import "./App.css";
import { useState } from "react";

{/* const App = () => {
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    }, {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    }, {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ];
  const [cont, setCont] = useState(0);
  const [info, setInfo] = useState('---');
  const next = () => {
    setCont(cont + 1);
    if (cont + 1 > reyesGodos.length) { setCont(0)};
    setInfo(<h2>La afición principal de <sapan className='rey'>{reyesGodos[cont].nombre}</sapan> es <span className="aficion">{reyesGodos[cont].aficion}</span></h2>);
  };
  return (
    <>
      <input type='button' value='siguiente' onClick={next} />
      <div>{info}</div>

    </>
  )
}
export default App;*/}
//************************************************************************* */


const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  return (
    <>
        <label htmlFor="u0">Etiqueta</label>
        <input id="u0" type="number"/> 
    </>
  )
}

export default App;