import React, { useEffect, useState } from "react";
import { Watch } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const CustomPokemonButton = (props) => {

  const name = props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1);

  const [detailPokemon, setDetailPokemon] = useState(false);
  const [urlPokemon, setUrlPokemon] = useState('');
  const { result } = useFetch(urlPokemon);
  const navigate = useNavigate();

  const handleClick = () => {
    setDetailPokemon(true);
    setUrlPokemon(props.data.url);
  }

  const saveParams = () => {
    setDetailPokemon(false);

    const name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
    const img = result.sprites.front_default;
    const typeOne = result.types[0].type.name;
    const typeTwo = result.types.length === 2 ? result.types[1].type.name : '';

    //navigate(`/pokemon/${result.id}?name=${name}`);
    navigate(`/pokemon/${result.id}?name=${name}&img=${img}&typeOne=${typeOne}&typeTwo=${typeTwo}`);
  }

  useEffect(() => {
    if (result.id && detailPokemon) {
      saveParams();
    }
  });

  return <div>{detailPokemon ? <Watch ariaLabel="loading-indicator" /> : <button onClick={handleClick}>{name}</button>
  }</div>;

  /*   return <button onClick={handleClick}>{name}</button>; */
};

export default CustomPokemonButton;
