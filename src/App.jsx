import { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0);

  const [esconder, setEsconder] = useState(false);

  function handleMostrarEsconder() {
    esconder === true ? setEsconder(false) : setEsconder(true);
  }

  return (
    <div>
      <h1>Valor: {numero}</h1>
      <button onClick={() => setNumero(numero + 100)}>Aumentar +100</button>

      <br /><br />

      {/* criar um parágrafo com if ternário */}
      <button onClick={handleMostrarEsconder}>{esconder === true ? "Esconder Texto" : "Mostrar Texto"}</button>
      {esconder === true ? <p>Mostrar Texto</p> : ""}

    </div>
  );
}

export default App;
