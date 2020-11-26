import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

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
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;

      &:first-child {
        padding-bottom: 10px;
      }
      &:hover,
      &:focus {
        background-color: var(--accent);
      }
    }
    li + li {
      padding: 10px 0;
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
    }
    &:hover,
    &:focus {
      background-color: var(--accent);
    }
  }
`;

const RightNav = ({ open }) => {
  const twitterLink = "https://twitter.com/Niko_Bentley";
  const githubLink = "https://github.com/MapleThunder";

  return (
    <Ul open={open}>
      <li>
        <Link to="#about">About</Link>
      </li>
      <li>
        <Link to="#skills">Skills</Link>
      </li>
      <li>
        <Link to="#contact">Contact</Link>
      </li>
      <li>
        <Link to={twitterLink} className="icon">
          <AiFillTwitterCircle />
        </Link>
        <Link to={githubLink} className="icon">
          <AiFillGithub />
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
