import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import ThemeToggle from "./themeToggle";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  li + li {
    padding-left: 20px;
  }

  li {
    a.icon {
      font-size: var(--h4);
      border: none;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: start;
    background-color: var(--primary);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-left: 0;
    transition: transform 0.3s ease-in-out;

    li {
      color: var(--white);
      width: 100%;
      padding: 10px 0 10px 40px;

      &:hover,
      &:focus {
        background-color: var(--accent);
      }
      &.social-links:hover,
      &.social-links:focus,
      &.toggle-wrapper:hover,
      &.toggle-wrapper:focus {
        background-color: var(--primary);
      }
    }
    li + li {
      padding: 10px 0 10px 40px;
    }
    a {
      &.icon {
        font-size: var(--h4);
        border: none;
      }
      &:hover,
      &:focus {
        background-color: var(--accent);
      }
      /* &.icon:hover,
      &.icon:focus {
        background-color: var(--primary);
      } */
    }
  }
`;

const RightNav = ({ open }) => {
  const twitterLink = "https://twitter.com/Niko_Bentley";
  const githubLink = "https://github.com/MapleThunder";

  return (
    <Ul open={open}>
      <li>
        <Link to="/#about">About</Link>
      </li>
      <li>
        <Link to="/#skills">Skills</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/#contact">Contact</Link>
      </li>
      <li className="social-links">
        <a href={twitterLink} className="icon">
          <AiFillTwitterCircle />
        </a>
        <a href={githubLink} className="icon">
          <AiFillGithub />
        </a>
      </li>
      <li className="toggle-wrapper">
        <ThemeToggle />
      </li>
    </Ul>
  );
};

export default RightNav;
