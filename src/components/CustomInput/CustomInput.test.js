import React from "react";
import { shallow } from "enzyme";
import CustomInput from "./CustomInput";

describe("CustomInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
