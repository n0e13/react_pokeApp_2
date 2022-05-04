import React from "react";
import { shallow } from "enzyme";
import CustomSelect from "./CustomSelect";

describe("CustomSelect", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
