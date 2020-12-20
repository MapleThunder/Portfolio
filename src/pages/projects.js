import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import GatsbyImage from "gatsby-image";

const ProjectsWrapper = styled.section`
  .project-list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    .card {
      display: grid;
      grid-template-columns: 100px auto;
      grid-column-gap: 20px;
      padding: 10px;

      p {
        grid-column: 2 / 3;
        margin-top: 0;

        .title {
          font-size: var(--h4);
          font-family: var(--headingFont);
          display: block;
        }
      }
      .tags {
        grid-column: 2 / 3;

        .tag {
          display: inline-block;
          background-color: var(--accent);
          padding: 0 10px;
          min-width: 40px;
          margin-left: 3px;
          margin-top: 4px;
          border-radius: 15px;
          color: var(--black);

          &:first-child {
            margin-left: 0;
          }
        }
      }

      .icon {
        align-self: center;
        grid-row: 1 / 3;
        grid-column: 1 / 2;
      }

      &:hover,
      &:focus {
        box-shadow: var(--level-3);
      }
    }

    img {
      border-radius: var(--borderRadius);
      border: solid 1px var(--grey);
    }

    @media only screen and (min-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
    }
  }
`;

const Projects = ({ data }) => {
  const { projects } = data;

  return (
    <>
      <Layout>
        <SEO title="Projects" />
        <ProjectsWrapper>
          <h1>Projects</h1>
          <p></p>
          <div className="project-list">
            {projects.edges.map(project => {
              const { frontmatter, fields } = project.node;

              return (
                <div className="card" key={frontmatter.project_id}>
                  {frontmatter.main_image && (
                    <GatsbyImage
                      className="icon"
                      {...frontmatter.main_image.childImageSharp}
                      alt={frontmatter.image_alt}
                    />
                  )}
                  <p className="description">
                    <span className="title">
                      <Link to={fields.slug}>{frontmatter.title}</Link>
                    </span>
                    {frontmatter.teaser}
                  </p>
                  <div className="tags">
                    {frontmatter.tags.map(tag => {
                      return (
                        <div className="tag" key={tag}>
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </ProjectsWrapper>
      </Layout>
    </>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type_id: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            project_id
            tags
            teaser
            main_image {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            image_alt
          }
        }
      }
    }
  }
`;
