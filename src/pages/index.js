import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLOURS } from "../components/styles";

const HeroContainer = styled.div`
  height: 500px;
  width: 100%;
  background-color: ${COLOURS.elevation4};
  display: flex;
  justify-content: center;

  .hero-content {
    max-width: 1200px;
    width: 80%;
    padding: 75px 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroContainer>
      <div className="hero-content">
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
    </HeroContainer>
  </Layout>
);

export default IndexPage;
