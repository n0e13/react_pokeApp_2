import React from "react";
import { shallow } from "enzyme";
import PokemonSearchList from "./PokemonSearchList";

describe("PokemonSearchList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokemonSearchList />);
    expect(wrapper).toMatchSnapshot();
  });
});
