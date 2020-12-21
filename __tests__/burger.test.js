import React from "react";
import renderer from "react-test-renderer";
import Burger from "../src/components/burger";

describe("Burger", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Burger open={false} setOpen={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
