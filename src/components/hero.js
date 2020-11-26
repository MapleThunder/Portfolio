import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledSection = styled.section`
  display: block;
  padding: 0;

  .hero-text {
    .first-line {
      font-size: 2rem;
      padding-bottom: 25px;
    }
  }

  .hero-image {
    width: 100%;
    justify-self: end;
    .me {
      border: solid 1px var(--grey);
      border-radius: 50%;
      box-shadow: var(--level-2);
    }
  }
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 var(--accent);
    font-size: inherit;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      width: 75%;
    }
    .hero-image {
      width: 25%;
    }
  }
  @media only screen and (min-width: 800px) {
    & > div {
      width: 48%;
    }
  }
`;

const Hero = ({ content, image }) => {
  const { frontmatter, html } = content;

  return (
    <StyledSection id="hero">
      <div className="hero-text">
        <h1 className="title">
          {frontmatter.greetings}{" "}
          <span role="img" aria-label="emoji" style={{ fontSize: "inherit" }}>
            {frontmatter.emoji}
          </span>
          <br />
          {frontmatter.title}
        </h1>
        <h2 className="subtitle">
          {frontmatter.subtitlePrefix}{" "}
          <span className="highlighted">{frontmatter.subtitleHighlight}</span>.
        </h2>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
      <div className="hero-image">
        <Img
          className="me"
          fluid={image.fluid}
          alt="A picture of me at the beach in São Jacinto, Portugal."
        />
      </div>
    </StyledSection>
  );
};

export default Hero;
