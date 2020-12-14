import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const ProjectBoostGame = styled.section`
  .game {
    background: var(--grey);
    width: 600px;
    height: 400px;
  }
`;

const Projects = () => {
  return (
    <>
      <Layout>
        <SEO title="Project Boost - Game" />
        <ProjectBoostGame>
          <h1>Project Boost - Game</h1>
          <p>
            The goal of Project Boost is to pilot your rocket from the blue
            launch pad past the jutting, sometimes shifting, landscape and onto
            the yellow landing pad safely.
          </p>
          <p>
            There is only 4 levels, but one mistake sends you back to the start
            !
          </p>
          <div className="game">GAME WINDOW</div>
        </ProjectBoostGame>
      </Layout>
    </>
  );
};

export default Projects;
