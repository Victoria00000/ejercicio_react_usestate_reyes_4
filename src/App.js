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
//************************************************************************* * ``/


const App = () => {
  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    }, {
      moneda: "Peso argentino",
      cambio: 118.6,
    }, {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    }, {
      moneda: "Peso mexicano",
      cambio: 23.2,
    }, {
      moneda: "Dólar",
      cambio: 1.14
    }
  ]
  //Sin bucles.
  const [cant, setCant] = useState(0);
  const [res1, setRes1] = useState(0);
  const [res2, setRes2] = useState(0);
  const [res3, setRes3] = useState(0);
  const [res4, setRes4] = useState(0);

  const conversor = (evt) => {
   setCant(evt.target.value);
   setRes1(Number(evt.target.value*cambios[1].cambio));
   setRes2(Number(evt.target.value*cambios[2].cambio));
   setRes3(Number(evt.target.value*cambios[3].cambio));
   setRes4(Number(evt.target.value*cambios[4].cambio));
  };

  return (
    <div id='box'>
      <h1>Conversor, Euro a $x</h1>
      <label htmlFor="u0">{cambios[0].moneda}</label>
      <input id="u0" type="number" value={cant} onChange={conversor} />

      <label htmlFor="u1">{cambios[1].moneda}</label>
      <input id="u1" type="number" readOnly value={res1} />
      <label htmlFor="u2">{cambios[2].moneda}</label>
      <input id="u2" type="number" readOnly value={res2} />
      <label htmlFor="u3">{cambios[3].moneda}</label>
      <input id="u3" type="number" readOnly value={res3} />
      <label htmlFor="u4">{cambios[4].moneda}</label>
      <input id="u4" type="number" readOnly value={res4} />
    </div>
  )
}

export default App;