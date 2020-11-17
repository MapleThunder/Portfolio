import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLOURS } from "../components/styles";

const HeroContainer = styled.div`
  width: 100%;
  background-color: ${COLOURS.elevation4};
  display: flex;
  justify-content: center;

  .hero {
    max-width: 1200px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;

    & > div {
      width: 48%;
    }

    &-text {
      .first-line {
        font-size: 2rem;
        padding-bottom: 25px;
      }
    }

    &-image {
      .me {
        border-radius: 50%;
      }
    }
  }
`;

export const pageQuery = graphql`
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
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroContainer>
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hi, Niko here. <br />
            <br />
            Full-Stack Web Developer with a passion for learning based in&nbsp;
            <span style={{ color: COLOURS.aero, fontSize: "inherit" }}>
              Nova Scotia
            </span>
            ,&nbsp;
            <span style={{ color: COLOURS.redSalsa, fontSize: "inherit" }}>
              Canada
            </span>
            .
          </h1>
        </div>
        <div className="hero-image">
          <Img
            className="me"
            fluid={data.file.childImageSharp.fluid}
            alt="A picture of me at the beach in São Jacinto, Portugal."
          />
        </div>
      </div>
    </HeroContainer>
  </Layout>
);

export default IndexPage;
