import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { COLORS } from "../style/variables";

import { IoMdArrowRoundForward } from "react-icons/io";
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
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLeft = styled.div``;

const FooterRight = styled.div``;
const Policy = styled.p``;

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const FooterInfoTittle = styled.h1``;
const FooterInfoLeft = styled.div``;
const FooterInfoRight = styled.div``;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
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

/* Contact us */
const ContactLeft = styled.div``;
const ContactRight = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
const Textarea = styled.textarea``;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterLeft>
          <FooterInfo>
            <FooterInfoTittle>Get in touch:</FooterInfoTittle>
            <FooterInfoLeft>
              <p>Tel: 508-332-9826</p>
              <p>Email: 508-332-9826</p>
            </FooterInfoLeft>
            <FooterInfoRight>
              <p>
                AB Property Maintenance PO 59
                <br />
                Nantucket, MA 02554
              </p>
            </FooterInfoRight>
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
            <Policy>
              © 2022 AB Property Maintenance. All rights reserved.
            </Policy>
          </FooterInfo>
        </FooterLeft>
        <FooterRight>
          <FooterInfoTittle>Contact us:</FooterInfoTittle>
          <ContactLeft>
            <Label>Enter your name</Label>
            <Input placeholder="Name" />
            <Label>Enter your email</Label>
            <Input placeholder="Email" />
          </ContactLeft>
          <ContactRight>
            <Label>Enter your name</Label>
            <Textarea placeholder="Message" />
          </ContactRight>
          <Button to="/submit">Send</Button>
        </FooterRight>
      </Container>
    </Section>
  );
};

export default Footer;
