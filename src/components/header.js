import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

const HeaderWrapper = styled.header`
  --headerHeight: 4rem;

  .home {
    font-size: var(--h2);
    font-family: var(--headingFont);
    color: white;
    text-decoration: none;
  }
`;

const NavLinks = styled.nav`
  a + a {
    margin-left: 20px;
  }

  a {
    font-size: var(--h4);
    border: solid 2px transparent;

    &:hover,
    &:focus {
      border: solid 2px var(--accent);
    }
    &.icon {
      font-size: var(--h3);
      border: none;

      &:hover,
      &:focus {
        background-color: var(--primary);
      }
    }
  }
`;

const Header = ({ siteTitle }) => {
  const twitterLink = "https://twitter.com/Niko_Bentley";
  const githubLink = "https://github.com/MapleThunder";

  return (
    <HeaderWrapper>
      <Link to="/" className="home">
        {siteTitle}
      </Link>

      <NavLinks>
        <Link to="#about">About</Link>
        <Link to="#skills">Skills</Link>
        <Link to="#contact">Contact</Link>
        <Link to={twitterLink} className="icon">
          <AiFillTwitterCircle />
        </Link>
        <Link to={githubLink} className="icon">
          <AiFillGithub />
        </Link>
      </NavLinks>
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
