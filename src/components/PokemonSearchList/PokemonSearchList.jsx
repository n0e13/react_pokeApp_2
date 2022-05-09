import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Watch } from 'react-loader-spinner'
import { useDebounce } from 'use-debounce';
import { POKEMON_URI } from "../../constants";
import axios from "axios";
import CustomSearch from '../CustomSearch';
import PokemonSearchCard from '../PokemonSearchCard';

const PokemonSearchList = () => {

  const [notFound, setNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [pokelist, setPokelist] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [value] = useDebounce(searchValue, 1500);

  useEffect(
    () => {
      if (value !== "") {
        const filtered = pokelist.filter(pokemon => pokemon.name !== value)
        if (filtered.length === pokelist.length) {
          (async () => {
            try {
              const response = await axios.get(`${POKEMON_URI}${value}`);
              const data = await response.data;
              setPokelist([data, ...pokelist]);
              setIsSearching(false);
              setSearchValue('');
            } catch (error) {
              setNotFound(true);
              setIsSearching(false);
            }
          })();
        }
      }
    }, [value]
  )

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    setIsSearching(true);
    setNotFound(false);
  }

  const paintCards = () => {
    return pokelist.map(pokemon => (
      <PokemonSearchCard key={uuidv4()} data={pokemon} />
    ));
  }


  return (
    <div>
      <CustomSearch onChange={handleChange} />
      {
        isSearching && value !== ''
          ? <Watch ariaLabel="loading-indicator" />
          : notFound
            ? <p>Not found {value}</p>
            : '' 
      }

      {paintCards()}

    </div>
  );
};

export default PokemonSearchList;
