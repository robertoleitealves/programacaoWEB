import {useState} from 'react';
import MegaSena from '../components/MegaSena';



function Index () {
  const [quantidade, setQuantidade] = useState(0)
  
  function submit (e) {
    e.preventDefault()
    setQuantidade(e.target[0].valueAsNumber)
  }
  
  return (
    <div>
      <header>
        <h1> *** MEGA-SENA *** </h1>
      </header>

      <main>
        <MegaSena quantidade={quantidade} />

        <form onSubmit={submit}>
          <input type="number" min={6} max={15} />
          <button>Gerar</button>
        </form>
      </main>
    </div>
  );
};

export default Index
