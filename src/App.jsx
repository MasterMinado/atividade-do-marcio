import { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0);
  const [num, setnum] = useState(0);

  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <h1>Valor: {numero}</h1>
      <button onClick={() => setNumero(numero + num) }>Aumentar +100</button>

      <br /><br />

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Esconder' : 'Mostrar'}
      </button>

      {mostrar ? <p>parágrafo para esconder e mostrar.</p> : null}
    </div>
  );
}

export default App;
