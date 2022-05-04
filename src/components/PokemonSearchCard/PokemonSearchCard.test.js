import React from "react";
import { shallow } from "enzyme";
import PokemonSearchCard from "./PokemonSearchCard";

describe("PokemonSearchCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonSearchCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
