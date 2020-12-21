import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PureHero as Hero } from "../src/components/hero";

beforeEach(cleanup); // clean the DOM !

describe("Hero", () =>
  it("renders correctly", () => {
    const node = {
      frontmatter: {
        emoji: "👋",
        greetings: "Ola",
        subtitleHighlight: "things for the web",
        subtitlePrefix: "I build and design ",
        title: "I'm Niko Bentley",
      },
      html:
        "<p>Web Developer with a passion for learning.<br>\nBased in Halifax, Nova Scotia.</p>",
    };
    const image = {
      childImageSharp: {
        fluid: {
          src: "/static/c392e3865190c633b0435677eecb6f43/6ed45/me.jpg",
          srcWebp: "/static/c392e3865190c633b0435677eecb6f43/90b9d/me.webp",
          srcSetWebp:
            "/static/c392e3865190c633b0435677eecb6f43/f5db0/me.webp 525w,\n/static/c392e3865190c633b0435677eecb6f43/565e9/me.webp 1050w,\n/static/c392e3865190c633b0435677eecb6f43/90b9d/me.webp 2100w",
          sizes: "(max-width: 2100px) 100vw, 2100px",
        },
      },
    };
    const { getByTestId, asFragment } = render(
      <Hero node={node} image={image} />
    );

    expect(getByTestId("hero-title")).toHaveTextContent("I'm Niko Bentley");
    expect(asFragment(<Hero node={node} image={image} />)).toMatchSnapshot();
  }));
