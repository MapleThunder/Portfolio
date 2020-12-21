import React from "react";
import { render } from "@testing-library/react";
import Burger from "../src/components/burger";

describe("Burger", () => {
  it("renders correctly, closed", () => {
    const { asFragment } = render(<Burger open={false} setOpen={jest.fn()} />);
    expect(
      asFragment(<Burger open={false} setOpen={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
