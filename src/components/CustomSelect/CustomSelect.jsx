import React from "react";
import { v4 as uuidv4 } from 'uuid';

const CustomSelect = (props) => {
  const type = props.type;

  const optionsValues = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];

  const paintOptions = () => {
    return optionsValues.map(
      (option) => {
        return <option key={uuidv4()} value={option.toLocaleLowerCase()} >{option}</option>
      }
    );
  }

  if (props.required) {
    return (
      <select name={type} onChange={props.onChange} required>
        {paintOptions()}
      </select>)
  } else {
    return (
      <select name={type} onChange={props.onChange}>
        {paintOptions()}
      </select>);
  };
};

export default CustomSelect;
