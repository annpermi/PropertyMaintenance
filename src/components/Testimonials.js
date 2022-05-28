import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../style/variables";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { data } from "../data/data";
import { AnimatePresence } from "framer-motion";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const TestimonialsWrapper = styled.div`
  background-color: ${COLORS.blue[300]};
  border: 1px solid ${COLORS.white};
  padding: 10px 10px 10px 10px;
  margin: 0 50px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
const TestimonialsContainer = styled.div`
  border: 1px solid ${COLORS.white};
  padding: 10px 10px 10px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  max-height: 500px;
  min-height: 300px;
`;
const Content = styled.div`
  color: ${COLORS.white};
  flex: 1;
  text-align: center;
  padding: 30px 50px;
  @media screen and (max-width: 768px) {
    padding: 15px 0;
  }
`;

const arrowButtons = css`
  width: 40px;
  height: 50px;
  color: ${COLORS.white};
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  padding: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;
const PrevArrow = styled(AiOutlineLeft)`
  ${arrowButtons}
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
const NextArrow = styled(AiOutlineRight)`
  ${arrowButtons}
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { testimonials } = data;
  const length = testimonials.length;
  const timeout = useRef(null);

  // Animated slider
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 4000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length <= 0) return null;

  return (
    <Section>
      <Container>
        <AnimatePresence>
          <TestimonialsWrapper>
            <TestimonialsContainer>
              <PrevArrow onClick={prevSlide} />
              <Content>
                {testimonials.map((testimonial, index) => {
                  return (
                    <div key={testimonial.id}>
                      {index === current && (
                        <div
                          data-aos="fade-left"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          <p style={{ marginBottom: "20px" }}>
                            {testimonial.title}
                          </p>
                          <p>{testimonial.subTitle}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </Content>
              <NextArrow onClick={nextSlide} />
            </TestimonialsContainer>
          </TestimonialsWrapper>
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default Testimonials;
