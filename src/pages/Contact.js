import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { SubmitButton } from "../components/Button";
import { COLORS } from "../style/variables";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { addressData } from "../data/AddressData";
import { Section, Container, Wrap } from "../components/Features";
import { init } from "@emailjs/browser";

/* emailjs */
init(process.env.REACT_APP_MY_USER_ID);

/* Form*/
const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin-top: 15.625rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;
const List = styled.ul``;
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.625rem;
  overflow: hidden;
  max-width: 26rem;
  width: 100%;

  @media screen and (max-width: 960px) {
    max-width: 40rem;
    min-width: 19rem;
  }
`;

const sharedInputStyle = css`
  width: 100%;
  font-size: 1rem;
  border: 0.125rem solid ${COLORS.black};
  border-radius: 0.563rem;
  height: 3.125rem;
  color: ${COLORS.orange};
  -webkit-text-fill-color: ${COLORS.orange};
  padding: 0 1.25rem;
  &:focus {
    outline: none;
    border: 0.125rem solid ${COLORS.orange};
    color: ${COLORS.black};
    -webkit-text-fill-color: ${COLORS.black};
  }
`;
const Input = styled.input`
  ${sharedInputStyle}
`;
const Textarea = styled.textarea`
  ${sharedInputStyle}
  min-height: 9.375rem;
  padding: 0.5rem 1.25rem;
  resize: none;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.938rem;
  justify-content: flex-start;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: 0.875rem;
  right: 10.188rem;
  max-width: 53.125rem;
  height: calc(100% - 1.75rem);
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 1100px) {
    right: 5rem;
  }

  @media screen and (max-width: 960px) {
    height: 20rem;
    top: -4.063rem;
    width: 90%;
    margin: 0 auto;
    left: 0;
    right: 0;
    padding-left: 0;
  }
`;

/* Map */
const MapWrapper = styled.div`
  background: rgba(8, 253, 216, 0.1);
  height: 100%;
`;

const Contact = ({ reverse }) => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_MY_SERVICE_ID,
        process.env.REACT_APP_MY_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_MY_USER_ID
      )
      .then(
        (result) => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send a message, please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft
            reverse="false"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="100"
            data-aos-anchor-placement="center bottom"
          >
            <Content>
              <h1>Contact us</h1>
              <form ref={form} onSubmit={sendEmail}>
                <List>
                  <ListItem>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="name"
                      id="name"
                      required
                    />
                  </ListItem>
                  <ListItem>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                  </ListItem>
                  <ListItem>
                    <Input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      id="subject"
                      required
                    />
                  </ListItem>
                  <ListItem>
                    <Textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      required
                    />
                  </ListItem>
                  <ListItem>
                    <SubmitButton type="submit" value="SEND" primary="true">
                      Send
                    </SubmitButton>
                  </ListItem>
                </List>
              </form>
            </Content>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <MapWrapper
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="true"
              data-aos-anchor-placement="center bottom"
            >
              <MapContainer
                center={addressData.loc}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={addressData.loc}>
                  <Popup>{addressData.title}</Popup>
                </Marker>
              </MapContainer>
            </MapWrapper>
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Contact;
