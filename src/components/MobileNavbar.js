import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { COLORS } from "../style/variables";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { DropDownIconWrapper } from "./Navbar";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = styled.div`
  position: fixed;
  z-index: 1100;
  width: 100%;
  height: 100%;
  background: ${COLORS.blue[400]};
  padding-top: 250px;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: ${COLORS.grey};
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  padding: 1rem;
  /* z-index: 2; */
  &:hover {
    color: ${COLORS.grey};
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectLink = styled(DropdownLink)`
  color: ${COLORS.black};
  &:hover {
    color: ${COLORS.blue[500]};
  }
`;

const DropdownContent = styled(motion.div)`
  overflow: hidden;
  height: 0;
  width: 100%;
  background-color: ${COLORS.white};
  /* [data-aos] {
    pointer-events: none;
  }
  .aos-animate {
    pointer-events: auto;
  }
  .aos-init[data-aos][data-aos].aos-animate {
    transform: unset;
  } */

  animation: growDown 400ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const DropdownContainer = styled.div`
  overflow: hidden;
  width: 100%;
  z-index: 10;
  &:hover {
    ${DropdownContent} {
      height: 183px;
    }
  }
`;

const MobileNavbar = ({ isOpen, toggle, dropdown, setDropdown }) => {
  return (
    <Dropdown isOpen={isOpen} onClick={toggle}>
      {/* <AnimatePresence> */}
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {data.menuData.map((item) => {
            if (item.title === "Services") {
              return (
                <DropdownContainer
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                  dropdown={dropdown}
                >
                  <DropdownLink
                    key={item.title}
                    to={item.link}
                    // style={{ background: "orange", zIndex: 1000000 }}
                  >
                    {item.title}
                    <DropDownIconWrapper>
                      {dropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </DropDownIconWrapper>
                  </DropdownLink>
                  {dropdown && (
                    <DropdownContent
                      dropdown={dropdown}
                      // data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      {data.services.map((service) => (
                        <SelectLink
                          key={`${service.id}-service`}
                          to={service.link}
                        >
                          {service.title}
                        </SelectLink>
                      ))}
                    </DropdownContent>
                  )}
                </DropdownContainer>
              );
            } else {
              return (
                <DropdownLink key={item.title} to={item.link}>
                  {item.title}
                </DropdownLink>
              );
            }
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
      {/* </AnimatePresence> */}
    </Dropdown>
  );
};

export default MobileNavbar;
