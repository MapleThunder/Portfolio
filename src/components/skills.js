import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

const SkillsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 0;
  }

  > p {
    margin: 0;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  .skill-card {
    background-color: var(--cardBg);
    padding: 10px 15px;
    border-radius: var(--borderRadius);
    box-shadow: var(--level-2);
    display: grid;
    grid-template-columns: 32px auto;

    .icon {
      grid-row: 1 / -1;
    }

    &:hover {
      box-shadow: var(--level-3);
    }

    h3 {
      margin: 0;
      font-size: var(--smallText);
      font-family: var(--bodyFont);
      font-weight: 600;
    }
    p {
      margin: 0;
      font-size: var(--smallText);
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            name
            tech
            icon {
              childImageSharp {
                fixed(width: 20, height: 20) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            alt
          }
        }
      }
    }
  `);

  console.log(data.allSkillsJson.edges[0].node.alt)
  console.log(typeof data.allSkillsJson.edges[0].node.alt)

  return (
    <SkillsWrapper id="skills" tabIndex="0">
      <h2>Skills</h2>
      <p>
        Over my career I have tried to stay curious. This curiosity has allowed
        me to acquire skills and knowledge in technologies as my work required,
        or as my interest led me.
      </p>
      {data.allSkillsJson.edges.map(skill => {
        return (
          <div className="skill-card" key={skill.node.id}>
            <GatsbyImage
              className="icon"
              alt={skill.node.alt}
              {...skill.node.icon.childImageSharp}
            />
            <h3>{skill.node.name}</h3>
            <p>{skill.node.tech}</p>
          </div>
        );
      })}
    </SkillsWrapper>
  );
};

export default Skills;
