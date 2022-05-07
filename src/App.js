
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';
import { pokemonContext } from './context/pokemonContext';
import { useState } from 'react';
//import pokemonJson from './utils/pokemonList.json'

function App() {

  const [pokeList, setPokeList] = useState([]);

  const savePokeList = (newPokemon) => {
    if (pokeList.length === 0) {
      console.log('listado vacío');
      setPokeList([...newPokemon]);
    }
    else {
      console.log('listado con cosas');
      setPokeList([newPokemon, ...pokeList]);
    }
  }

  /*   if (pokeList.length === 0) {
      savePokeList(pokemonJson);
    } */

  const pokeData = {
    pokeList,
    savePokeList
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <pokemonContext.Provider value={pokeData}>
          <Main />
        </pokemonContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
