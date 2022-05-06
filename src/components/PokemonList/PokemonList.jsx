import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Watch } from 'react-loader-spinner';
import { POKEMON_URI } from '../../constants/index';
import { pokemonContext } from '../../context/pokemonContext';
import useFetch from '../../hooks/useFetch';
import CustomPokemonButton from '../CustomPokemonButton';

const PokemonList = () => {

  const { pokeList, savePokeList } = useContext(pokemonContext);
  const { loading, result } = useFetch(POKEMON_URI);

  useEffect(() => {
    if (result.results && pokeList.length === 0) {
      savePokeList(result.results);
    }
  });

  const paintPokemonsCards = () => {
    return pokeList.map(
      (pokemon) => (
        <CustomPokemonButton key={uuidv4()} data={pokemon} />
      ));
  }

  return (
    <div>
      {loading ? <Watch ariaLabel="loading-indicator" /> : paintPokemonsCards()}
    </div>
  );
};

export default PokemonList;
