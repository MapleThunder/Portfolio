import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

import { COLOURS } from "./styles";

const HeaderWrapper = styled.header`
  background: ${COLOURS.bdazzledBlue};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 80%;
  padding: 1rem;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .home-link {
    margin: 0;

    a {
      font-size: 1.25rem;
      color: white;
      text-decoration: none;
    }
  }
`;

const SocialLinks = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    color: ${COLOURS.fontColour};
    font-size: 2rem;

    &:hover,
    &:focus {
      color: ${COLOURS.redSalsa};
    }
  }
`;

const Header = ({ siteTitle }) => {
  const twitterLink = "https://twitter.com/Niko_Bentley";
  const githubLink = "https://github.com/MapleThunder";

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div className="home-link">
          <Link to="/">{siteTitle}</Link>
        </div>
        <SocialLinks>
          <Link to={twitterLink}>
            <AiFillTwitterCircle />
          </Link>
          <Link to={githubLink}>
            <AiFillGithub />
          </Link>
        </SocialLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
