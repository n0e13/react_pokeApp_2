import React from "react";
import { shallow } from "enzyme";
import CustomSaveButton from "./CustomSaveButton";

describe("CustomSaveButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomSaveButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
