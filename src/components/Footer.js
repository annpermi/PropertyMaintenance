import React from "react";
import styled, { css } from "styled-components/macro";
import { COLORS } from "../style/variables";
import { addressData } from "../data/AddressData";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Section = styled.section`
  background: ${COLORS.grey};
  color: ${COLORS.white};
  width: 100%;
  min-height: 300px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterInfo = styled.div`
  text-align: center;
  padding: 1.125rem;
  line-height: 3;
  font-size: 1.125rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
    line-height: 2;
  }
`;

const FooterLogo = styled.h1`
  font-size: 3.125rem;
  padding: 1.25rem;
`;

const FooterIcons = styled.div`
  padding: 1.25rem;
  h3 {
    font-size: 1.438;
    padding: 0.625;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: ${COLORS.orange};
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;

const Youtube = styled(FaYoutube)`
  ${Icons}
`;

const Policy = styled.p`
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterInfo>
          <p>{addressData.title}</p>
          <p>{addressData.address}</p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.open(`tel:${addressData.tel}`, "_self")}
          >
            Tel: {addressData.tel}
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.open(`mailto:${addressData.email}`, "_blank")}
          >
            Email: {addressData.email}
          </p>
        </FooterInfo>
        <FooterLogo>{addressData.logo}</FooterLogo>
        <FooterIcons>
          <h3 style={{ paddingBottom: "0.825rem" }}>Connect with us</h3>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </SocialIcons>
        </FooterIcons>
      </Container>
      <Policy>© 2022 AB Property Maintenance. All rights reserved.</Policy>
    </Section>
  );
};

export default Footer;
