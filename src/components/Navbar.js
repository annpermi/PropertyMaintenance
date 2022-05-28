import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation, NavLink } from "react-router-dom";
import { data } from "../data/data";
import { Button } from "./Button";
import { COLORS } from "../style/variables";
import Bars from "../images/bars.svg";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 1050;
  position: fixed;
  width: 100%;
`;

const LinkStyled = css`
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: 35px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  &:hover {
    border-bottom: 2px solid ${COLORS.white};
  }
  &.active {
    border-bottom: 2px solid ${COLORS.white};
  }
`;

const Logo = styled(Link)`
  ${LinkStyled}
  font-style: italic;
  font-size: 1.25rem;
  &:hover {
    border-bottom: none;
  }
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-70%, 60%);
    color: ${COLORS.white};
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(NavLink)`
  ${LinkStyled}
  margin: 1rem 0.5rem;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: ${COLORS.blue[700]};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 12%);
  z-index: 2;
  padding: 10px;
`;

export const DropdownContainer = styled.div`
  overflow: hidden;
`;

const DropdownLink = styled(Link)`
  ${LinkStyled}
  padding: 0.5rem;
`;

export const DropDownIconWrapper = styled.span`
  padding-left: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

const Navbar = ({ toggle, dropdown, setDropdown }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    // 60 height of the navbar
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/"
        ? `${COLORS.blue[400]}`
        : "transparent",
    transition: "0.4s",
  };

  return (
    <Nav style={style}>
      <Logo to="/">AlanBurney</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {data.menuData.map((item) => {
          if (item.title === "Services") {
            return (
              <DropdownContainer
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <NavMenuLinks
                  to={item.link}
                  key={item.id}
                  css={`
                    margin: 12px 8px;
                  `}
                >
                  {item.title}
                  <DropDownIconWrapper>
                    {dropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </DropDownIconWrapper>
                </NavMenuLinks>
                {dropdown && (
                  <DropdownContent>
                    {data.services.map((service) => (
                      <DropdownLink
                        key={`${service.id}-service`}
                        to={service.link}
                      >
                        {service.title}
                      </DropdownLink>
                    ))}
                  </DropdownContent>
                )}
              </DropdownContainer>
            );
          } else {
            return (
              <NavMenuLinks to={item.link} key={item.id}>
                {item.title}
              </NavMenuLinks>
            );
          }
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
