import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 2rem;
`;

const Section = ({ content }) => {
  const { frontmatter, html } = content;

  return (
    <StyledSection tabIndex="0" id={frontmatter.type_id}>
      <h2>{frontmatter.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
    </StyledSection>
  );
};

export default Section;
