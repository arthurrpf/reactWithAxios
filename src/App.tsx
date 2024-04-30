import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

interface Advice{
  id: number;
  advice: string;
}

function App() {

  const [nome, setNome] = useState<String>();
  const [Personagem, setPersonagem] = useState();

  const getData = useCallback( async()=> {
    await axios.get('https://swapi.py4e.com/api/people/4/')
    .then(function (response) {
     console.log(response.data);
     setPersonagem(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }, [])

  useEffect(()=>{
    getData();
  }, [])

  const defName = (nome: string) => {
    setNome(nome);
  }

  return (
    <div>
      <strong>Ola {nome}</strong>

      <strong>{Personagem && Personagem.name}</strong>
      <button onClick={() => defName('Tomate')}>Tomate</button>
      <button onClick={() => defName('Batata')}>Batata</button>
      <button onClick={() => defName('Beterraba')}>Beterraba</button>

    </div>
  )
}

export default App
