import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const ProjectWrapper = styled.section`
  hr {
    width: 66%;
  }
`;

const Project = ({ data }) => {
  const proj = data.markdownRemark;

  return (
    <Layout>
      <ProjectWrapper>
        <h1>{proj.frontmatter.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: proj.html }} />
      </ProjectWrapper>
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
