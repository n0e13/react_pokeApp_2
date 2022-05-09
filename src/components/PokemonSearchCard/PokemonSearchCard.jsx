import React from "react";

const PokemonSearchCard = (props) => {

  const name = props.data.name;
  const image = props.data.sprites.front_default;
  const stats = props.data.stats;

  return (
    <div>
      {name}
      <img src={image} alt={name} />
      {stats.map((stat, i) => {
        return <p key={i}>{stat.stat.name}: {stat.base_stat}</p>
      })}
    </div>
  );
};

export default PokemonSearchCard;
