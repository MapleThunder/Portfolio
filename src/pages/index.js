import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLOURS } from "../components/styles";

const HeroContainer = styled.div`
  height: 500px;
  width: 100%;
  background-color: ${COLOURS.elevation4};
  display: flex;
  justify-content: center;

  .hero {
    max-width: 1200px;
    width: 80%;
    padding: 75px 0;

    & > div {
      max-width: 45%;
    }

    &-image {
      .me {
        border-radius: 250px;
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
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
    {console.log(data)}
    <SEO title="Home" />
    <HeroContainer>
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hi, Niko here. <br />
            Full-Stack Web Developer with a passion for learning <br />
            based in Nova Scotia,&nbsp;
            <span style={{ color: COLOURS.redSalsa, fontSize: "2rem" }}>
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
