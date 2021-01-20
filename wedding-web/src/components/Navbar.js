import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
/* import { Link } from "react-router-dom"; */
import { HashLink as Link } from "react-router-hash-link";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
// position-sticky
const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "red" : "transparent")}
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index 100;
  position: fixed; 
  width 100%
`;

const NavLink = css`
    color: #fff;
    dispay: flex;
    align-items: center;
    padding 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    &.active {
      border-bottom: 3px solid #01bf71;
    }
`;

const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  alig-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.screenY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <IconContext.Provider value={{ color: "#fff", size: 32 }}>
      <Nav scrollNav={scrollNav}>
        <Logo to="/" onClick={toggleHome}>
          BorsyVideo
        </Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks
              to={item.link}
              key={index}
              smooth="true"
              duration={50000} // mintha a smooth alatt semmi mást nem használna
              /*  spy={true} */
              exact="true"
              offset={50}
            >
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <NavMenuLinks
            to="#contact"
            smooth="true"
            duration={500}
            /* spy={true} */
            exact="true"
            offset={-80}
          >
            <Button primary="true">Contact Us</Button>
          </NavMenuLinks>
        </NavBtn>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
