import React from "react";
import { shallow } from "enzyme";
import CustomCloseButton from "./CustomCloseButton";

describe("CustomCloseButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomCloseButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
