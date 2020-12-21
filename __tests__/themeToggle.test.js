import React from "react";
import { render, cleanup } from "@testing-library/react";
import ThemeToggle from "../src/components/themeToggle";

afterEach(cleanup);

describe("Theme Toggle", () =>
  it("renders correctly", () => {
    const { asFragment } = render(<ThemeToggle />);
    expect(asFragment(<ThemeToggle />)).toMatchSnapshot();
  }));
