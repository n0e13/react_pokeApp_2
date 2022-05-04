import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./CustomButton";

describe("CustomButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
