import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 2rem;
`;

const Section = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content;

  return (
    <StyledSection tabIndex="0" id={frontmatter.type_id}>
      <h2>{frontmatter.title}</h2>
      <p>{rawMarkdownBody}</p>
    </StyledSection>
  );
};

export default Section;
