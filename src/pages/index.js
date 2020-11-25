import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLOURS } from "../styles";
import Hero from "../components/hero";

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

const ContentSection = styled.section`
  background-color: ${COLOURS.aero};
  width: 100%;
  display: flex;
  justify-content: space-around;

  .section-content {
    max-width: 1200px;
    width: 80%;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero content={data.hero.edges[0].node} image={data.file.childImageSharp} />
    <ContentSection>
      <div className="section-content">
        <h2>About Me</h2>
        <p></p>
      </div>
    </ContentSection>
  </Layout>
);

export default IndexPage;

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
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            emoji
            greetings
            subtitleHighlight
            subtitlePrefix
            title
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
