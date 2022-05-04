import React from "react";
import { shallow } from "enzyme";
import CustomForm from "./CustomForm";

describe("CustomForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
