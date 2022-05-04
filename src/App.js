
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';
import { pokemonContext } from './context/pokemonContext';
import { useState } from 'react';

function App() {

  const [pokeList, setPokeList] = useState([]);

  const savePokeList = (newPokeList) => setPokeList(newPokeList);

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
