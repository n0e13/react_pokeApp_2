import React from "react";
import { shallow } from "enzyme";
import CustomPokemonButton from "./CustomPokemonButton";

describe("CustomPokemonButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomPokemonButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
