import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLOURS } from "../components/styles";

const HeroContainer = styled.div`
  height: 500px;
  width: 100%;
  background-color: ${COLOURS.dark.elevation4};
  display: flex;
  justify-content: center;

  .hero-content {
    max-width: 1200px;
    padding: 25px 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroContainer>
      <div className="hero-content">
        <h1>Hi, Niko here</h1>
      </div>
    </HeroContainer>
  </Layout>
);

export default IndexPage;
