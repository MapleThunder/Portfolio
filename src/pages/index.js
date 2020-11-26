import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
import Skills from "../components/skills";
import ContactForm from "../components/contactForm";

const IndexPage = ({ data }) => {
  const { hero, file, about } = data;

  return (
    <>
      <Header siteTitle="NB" />
      <Layout>
        <SEO title="Home" />
        <Hero content={hero.edges[0].node} image={file.childImageSharp} />
        <Section content={about.edges[0].node} />
        <Skills />
        <ContactForm />
      </Layout>
      <Footer />
    </>
  );
};

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
    about: allMarkdownRemark(
      filter: { frontmatter: { type_id: { eq: "about" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            type_id
          }
          html
        }
      }
    }
  }
`;
