import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLOURS } from "../styles";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = ({ data }) => (
  <>
    <Header siteTitle="NB" />
    <Layout>
      <SEO title="Home" />
      <Hero
        content={data.hero.edges[0].node}
        image={data.file.childImageSharp}
      />
      <section>
        <h2>About Me</h2>
        <p></p>
      </section>
    </Layout>
    <Footer />
  </>
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
          html
        }
      }
    }
  }
`;
