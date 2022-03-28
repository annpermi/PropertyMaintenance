import React from "react";
import styled from "styled-components";
import DOMPurify from "dompurify";
import { COLORS } from "../style/variables";

export const Section = styled.section`
  background: ${COLORS.grey};
  padding: 12rem calc((100vw - 1300px) / 2) 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 3rem calc((100vw - 1300px) / 2);
  }
`;

export const Container = styled.div`
  background: ${COLORS.white};
  padding: 3rem 2rem;
  position: relative;
`;

export const Wrap = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -0.938rem;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

export const ColumnRight = styled.div`
  position: absolute;
  top: -5rem;
  right: 2.25rem;
  max-width: 53.125rem;
  height: 120%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 20rem;
    top: -4.063rem;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Features = (props) => {
  const { heading, paragraphOne, paragraphTwo, image } = props;
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <h1>{heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(paragraphOne, {
                    USE_PROFILES: { html: true },
                  }),
                }}
              />
              <p
                style={{ textAlign: "center", fontWeight: 800 }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(paragraphTwo, {
                    USE_PROFILES: { html: true },
                  }),
                }}
              />
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={image}
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
