import React from "react";
import { shallow } from "enzyme";
import AddNew from "./AddNew";

describe("AddNew", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddNew />);
    expect(wrapper).toMatchSnapshot();
  });
});
