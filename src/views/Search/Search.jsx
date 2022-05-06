import React from "react";
import CustomSearch from '../../components/CustomSearch';
import PokemonSearchList from '../../components/PokemonSearchList'

const Search = () => {

  return (
    <div>
      <CustomSearch />
      <PokemonSearchList />
    </div>
  );
};

export default Search;
