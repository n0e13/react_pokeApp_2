import React, { useContext } from "react";
import { pokemonContext } from "../../context/pokemonContext";
import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelect';
import CustomSaveButton from '../CustomSaveButton';

const CustomForm = () => {

  const { savePokeList } = useContext(pokemonContext);

  let typeOnePokemon = '';
  let typeTwoPokemon = '';

  const validatePokemon = (e) => {
    e.preventDefault();

    const idPokemon = e.target.idPokemon.value;
    const namePokemon = e.target.namePokemon.value;
    const imgPokemon = e.target.imagePokemon.value;

    const regex = /^\d+$/;
    if (!regex.test(idPokemon)) {
      //TODO: aviso de que no es número
      e.target.idPokemon.value = '';
    }

    if (typeOnePokemon === typeTwoPokemon) {
      //TODO: Aviso de que no pueden ser iguales
    }

    const newPokemon = {
      id: idPokemon,
      name: namePokemon,
      img: imgPokemon,
      typeOne: typeOnePokemon,
      typeTwo: (typeTwoPokemon !== '') ? typeTwoPokemon : ''
    };
    console.log(newPokemon);
    savePokeList(newPokemon);

  }

  const handleChange = (e) => {
    e.target.name === 'typeOne' ? typeOnePokemon = e.target.value : typeTwoPokemon = e.target.value;
  }

  return (
    <form onSubmit={validatePokemon}>
      <CustomInput type='number' placeholder='Id' id='idPokemon' required={true} />
      <CustomInput type='text' placeholder='Name' id='namePokemon' required={true} />
      <CustomInput type='text' placeholder='Image' id='imagePokemon' required={true} />
      <CustomSelect type={'typeOne'} id='typeOnePokemon' onChange={handleChange} required={true} />
      <CustomSelect type={'typeTwo'} id='typeTwoPokemon' onChange={handleChange} />
      <CustomSaveButton />
    </form>
  );
};

export default CustomForm;
