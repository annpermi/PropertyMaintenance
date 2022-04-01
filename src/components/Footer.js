import React from "react";
import styled, { css } from "styled-components/macro";
import { COLORS } from "../style/variables";
import { data } from "../data/data";
import {
  // FaInstagram,
  FaFacebookF,
  // FaLinkedinIn,
  // FaYoutube,
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
  text-align: center;
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
  color: ${COLORS.navy};
`;

// const Instagram = styled(FaInstagram)`
//   ${Icons}
// `;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

// const LinkedIn = styled(FaLinkedinIn)`
//   ${Icons}
// `;

// const Youtube = styled(FaYoutube)`
//   ${Icons}
// `;

const Policy = styled.p`
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Span = styled.span`
  cursor: pointer;
  &:hover {
    color: ${COLORS.navy};
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterInfo>
          <p>{data.addressData.poBox}</p>
          <p>{data.addressData.address}</p>
          <p
            onClick={() => window.open(`tel:${data.addressData.tel}`, "_self")}
          >
            Tel: <Span>{data.addressData.tel}</Span>
          </p>
          <p
            onClick={() =>
              window.open(`mailto:${data.addressData.email}`, "_blank")
            }
          >
            Email: <Span>{data.addressData.email}</Span>
          </p>
        </FooterInfo>
        <FooterLogo>{data.addressData.title}</FooterLogo>
        <FooterIcons>
          <h3 style={{ paddingBottom: "0.825rem" }}>Connect with us</h3>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            {/* <a
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
              <LinkedIn />
            </a> */}
          </SocialIcons>
        </FooterIcons>
      </Container>
      <Policy>© 2022 AB Property Maintenance. All rights reserved.</Policy>
    </Section>
  );
};

export default Footer;
