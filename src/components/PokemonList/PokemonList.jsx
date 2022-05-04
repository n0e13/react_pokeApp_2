import React, { useContext } from "react";
import { POKEMON_URI } from '../../constants/index';
import { pokemonContext } from '../../context/pokemonContext';
import CustomButtom from '../CustomButton';

const PokemonList = () => {

  const { pokeList, savePokeList } = useContext(pokemonContext);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          if (input !== '') {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
            const data = await resp.data;
            // setPokemons({ data });
            setPokemons([data, ...pokemons]);
            setInput('');
          }
        } catch (error) {
          console.log(error);
          setInput(''); // No pinta nada
        }
      };
      fetchData();
    },
    [input] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <div>

    </div>
  );
};

export default PokemonList;
