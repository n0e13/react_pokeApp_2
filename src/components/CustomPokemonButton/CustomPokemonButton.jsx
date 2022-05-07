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

    props.data.url ? setUrlPokemon(props.data.url) : saveParams();

  }

  const saveParams = () => {
    setDetailPokemon(false);
    let id = '';
    let name = '';
    let img = '';
    let typeOne = '';
    let typeTwo = '';

    if (urlPokemon !== '') { // API
      id = result.id;
      name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
      img = result.sprites.front_default;
      typeOne = result.types[0].type.name;
      typeTwo = result.types.length === 2 ? result.types[1].type.name : '';
    } else { // Creados
      id = props.data.id;
      name = props.data.name;
      img = props.data.img;
      typeOne = props.data.typeOne;
      typeTwo = props.data.typeTwo;
    }

    //navigate(`/pokemon/${result.id}?name=${name}`);
    navigate(`/pokemon/${id}?name=${name}&img=${img}&typeOne=${typeOne}&typeTwo=${typeTwo}`);
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
