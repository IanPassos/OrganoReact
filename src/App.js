import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Posição from './Componentes/Posição';
import Rodape from './Componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [posições, setPosições] = useState([
    {
      id: uuidv4(),
      nome: 'Topo',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Selva',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome: 'Meio',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      nome: 'ADC',
      cor: '#db6ebf',
    },
    {
      id: uuidv4(),
      nome: 'Suporte',
      cor: '#ff8a29',
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ian',
      campeões: 'Caitlyn, Zeri e Jhin',
      posição: posições[3].nome,
      imagem: '/Imagens/cait.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gabriel',
      campeões: 'Zilean, Karma e Rakan',
      posição: posições[4].nome,
      imagem: '/Imagens/zilean.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lucas',
      campeões: "Vel'koz, Jayce e Akali",
      posição: posições[0].nome,
      imagem: "/Imagens/vel'koz.jpg",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rafael',
      campeões: "Nasus, Cho'gath e Orianna",
      posição: posições[2].nome,
      imagem: '/Imagens/Nasus.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Alan',
      campeões: 'Talon, Corki e Viktor',
      posição: posições[2].nome,
      imagem: '/Imagens/talon.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Luiz Gabriel',
      campeões: 'Senna e Sona',
      posição: posições[4].nome,
      imagem: '/Imagens/senna.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Marcos',
      campeões: 'Jinx e Miss Fortune',
      posição: posições[3].nome,
      imagem: '/Imagens/jinx.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rodrigo',
      campeões: "Kha'zix",
      posição: posições[1].nome,
      imagem: '/Imagens/Kha-Zix.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vitória',
      campeões: 'Kindred, Lillia e Ekko',
      posição: posições[1].nome,
      imagem: '/Imagens/kindred.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Adriano',
      campeões: 'Fiora, Camille e Jax',
      posição: posições[0].nome,
      imagem: '/Imagens/Fiora.jpg',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Letícia',
      campeões: "Ornn, Sion e K'Sante",
      posição: posições[0].nome,
      imagem: '/Imagens/ornn.jpg',
    },
  ]


  const [integrantes, setIntegrantes] = useState(inicial)


  function deletarIntegrante(id) {
    setIntegrantes(integrantes.filter(integrante => integrante.id !== id))
  }

  function mudarCorDaPosição(cor, id) {
    setPosições(posições.map(posição => {
      if (posição.id === id) {
        posição.cor = cor;
      }
      return posição
    }))
  }

  function resolverFavorito(id) {
    setIntegrantes(integrantes.map(integrante => {
      if (integrante.id === id) integrante.favorito = !integrante.favorito;
      return integrante
    }))
  }

  function cadastrarPosição(novaPosição) {
    setPosições([...posições, {...novaPosição, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarPosição={cadastrarPosição}
        posições={posições.map(posição => posição.nome)} 
        aoCadastrar={integrante => setIntegrantes([...integrantes, integrante])} 
      />
      <section className='posições'>
        <h1>Jogadores</h1>
        {posições.map(
          (posição, indice) =>
            <Posição
              key={indice}
              posição={posição}
              integrantes={integrantes.filter(integrante => integrante.posição === posição.nome)}
              aoDeletar={deletarIntegrante}
              mudarCor={mudarCorDaPosição}
              aoFavoritar={resolverFavorito}
            />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
