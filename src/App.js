import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Posição from './Componentes/Posição';
import Rodape from './Componentes/Rodape';

function App() {

  const posições = [
    {
      nome: 'Topo',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Selva',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Meio',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'ADC',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Suporte',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ]

  const [integrantes, setIntegrantes] = useState([])

  const aoIntegranteAdicionado = (integrante) => {
    setIntegrantes([...integrantes, integrante])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario posições={posições.map(posição => posição.nome)} aoIntegranteCadastrado={integrante => aoIntegranteAdicionado(integrante)} />

      {posições.map(
        posição =>
          <Posição
            key={posição.nome}
            nome={posição.nome}
            corPrimaria={posição.corPrimaria}
            corSecundaria={posição.corSecundaria}
            integrantes={integrantes.filter(integrante => integrante.posição === posição.nome)}
          />)}
      <Rodape />
    </div>
  );
}

export default App;
