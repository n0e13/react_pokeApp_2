import React from "react";
import { shallow } from "enzyme";
import CustomSearch from "./CustomSearch";

describe("CustomSearch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
