import React from "react";
import { shallow } from "enzyme";
import PokemonDetail from "./PokemonDetail";

describe("PokemonDetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
