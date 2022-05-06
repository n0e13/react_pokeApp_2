import React from "react";
import { shallow } from "enzyme";
import CustomPokemonButton from "./CustomPokemonButton.test";

describe("CustomPokemonButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomPokemonButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
