import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../src/components/header";

afterEach(cleanup);

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Header siteTitle="NB" />);
    expect(asFragment(<Header siteTitle="NB" />)).toMatchSnapshot();
  });
});
