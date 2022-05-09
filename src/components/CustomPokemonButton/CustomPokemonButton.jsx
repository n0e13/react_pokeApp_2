import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { styled } from '@mui/material/styles';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const PokemonButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  width: 150,
  height: 75,
  margin: 10,
  '&:hover': {
    backgroundColor: red[700],
  },
}));

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

  return (
    <div>
      {detailPokemon ?  <LoadingButton loading variant="outlined"/> : <PokemonButton onClick={handleClick}><CatchingPokemonIcon/><pre>  </pre>{name}</PokemonButton>}
    </div>
  );

};

export default CustomPokemonButton;
