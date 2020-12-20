import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
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
    box-shadow: inset 0 -2.5rem 0 var(--redSalsa);
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
    .hero-image {
      width: 40%;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2100) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
      hero: allMarkdownRemark(
        filter: { frontmatter: { type_id: { eq: "hero-front" } } }
      ) {
        edges {
          node {
            frontmatter {
              emoji
              greetings
              subtitleHighlight
              subtitlePrefix
              title
            }
            html
          }
        }
      }
    }
  `);
  const { frontmatter, html } = data.hero.edges[0].node;

  return (
    <StyledSection id="hero">
      <div className="hero-text">
        <h1 data-testid="hero-title" className="title">
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
          alt="A picture of me at the beach in São Jacinto, Portugal."
          {...data.file.childImageSharp}
        />
      </div>
    </StyledSection>
  );
};

export default Hero;
