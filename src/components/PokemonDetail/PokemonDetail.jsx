import React from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import CustomCloseButton from '../CustomCloseButton';

const PokemonDetail = () => {

  const location = useLocation();
  const { name, img, typeOne, typeTwo } = queryString.parse(location.search);


  return (
    
  <div> <CustomCloseButton/><p>Nombre: {name} <img src={img} /> Tipos: {typeOne} {typeTwo !== '' ? `y ${typeTwo}` : ''}</p></div>
  );
};

export default PokemonDetail;
