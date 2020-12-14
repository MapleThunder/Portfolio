import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Project = ({ data }) => {
  const proj = data.markdownRemark;

  return (
    <Layout>
      <h1>{proj.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: proj.html }} />
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
