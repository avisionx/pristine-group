import React, { useEffect, useRef, useState } from "react";
import placeholderBannerImg from "../img/image.jpg";
import placeholderProjectImg from "../img/placeholder.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../fullscreen-carousel.scss";
import styled from "styled-components";
import { mdiChevronDown, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "reactstrap";
import Container from "reactstrap/lib/Container";
import { Link } from "react-router-dom";
import LinkArrow from "../img/link-arrow.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const projectData = [
  {
    title: "Residential",
    to: "/projects/residential",
  },
  {
    title: "Retail",
    to: "/projects/retail",
  },
  {
    title: "Commercial",
    to: "/projects/commercial",
  },
  {
    title: "Warehousing",
    to: "/projects/warehousing",
  },
  {
    title: "Industrial",
    to: "/projects/industrial",
  },
  {
    title: "Farmhouse & Land",
    to: "/projects/farmhouse_and_land",
  },
];

const Home = ({ isSmall }) => {
  const [showAlert, setShowAlert] = useState(true);
  const alert = useRef(null);
  useEffect(() => {
    if (alert.current !== null) {
      setTimeout(
        () =>
          alert.current.classList.add(
            "d-block",
            "animate__animated",
            "animate__fadeInRight"
          ),
        1000
      );
    }
  }, []);

  const carouselIndicator = (onClickHandler, isSelected, index) => {
    return (
      <div className={`carouselIndicator ${isSelected ? "active" : ""}`}>
        <svg
          width="30"
          height="30"
          style={{ cursor: "pointer" }}
          onClick={onClickHandler}
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            fill="none"
            stroke={`${isSelected ? "#F3F6FB" : "#A9A9A9"}`}
            strokeWidth="1"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill={`${isSelected ? "#F3F6FB" : "#A9A9A9"}`}
            fontSize="0.9rem"
            fontWeight="300"
            dy=".3em"
          >
            {index + 1}
          </text>
        </svg>
      </div>
    );
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Carousel
          stopOnHover={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={!isSmall}
          interval={10000}
          renderIndicator={(onClickHandler, isSelected, index) =>
            carouselIndicator(onClickHandler, isSelected, index)
          }
          className="fullscreen-carousel"
          autoPlay
          infiniteLoop
        >
          <img src={placeholderBannerImg} alt="" />
          <img src={placeholderBannerImg} alt="" />
          <img src={placeholderBannerImg} alt="" />
          <img src={placeholderBannerImg} alt="" />
          <img src={placeholderBannerImg} alt="" />
        </Carousel>
        {!isSmall && (
          <p
            style={{
              position: "absolute",
              top: "50%",
              transform: "rotate(-90deg)",
              marginLeft: "-3rem",
            }}
            className="minimal-index"
          >
            HOMEPAGE
          </p>
        )}
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-55%)",
          }}
          className="font-weight-bold yearLeft50"
        >
          <YearText>
            <i>50</i>
          </YearText>
          <YearsOf className="text-white text-uppercase font-weight-bold">
            Years Of
          </YearsOf>
          <Exp className="text-white text-uppercase font-weight-light">
            Experience
          </Exp>
        </div>
        {!isSmall && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
            className={`rounded-0 shadow-sm bg-white text-secondary ${
              showAlert ? "d-none" : "animate__animated animate__fadeOutRight"
            }`}
            color="light"
            ref={alert}
          >
            <div className="d-flex flex-column p-2">
              <Icon
                path={mdiClose}
                size={1.5}
                className="ml-auto"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowAlert(false);
                }}
              />
              <div className="px-4">
                <p className="mb-3 h3 pb-3 pt-2 px-5 widen font-weight-light text-dark">
                  Can we help you?
                </p>
                <div className="d-flex pb-4">
                  <Button
                    className="rounded-0 border-dark ml-auto mr-3 px-5"
                    size="md"
                    color="dark"
                  >
                    YES
                  </Button>
                  <Button
                    className="rounded-0 border-dark mr-auto ml-3 px-5"
                    size="md"
                    color="light"
                    onClick={() => {
                      setShowAlert(false);
                    }}
                  >
                    NO
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="text-center"
        >
          <p className="small widen text-white text-uppercase mb-0">Scroll</p>
          <Icon path={mdiChevronDown} size={1} color="white" />
        </div>
      </div>

      <Container
        className="my-5 py-lg-5"
        fluid
        style={{ position: "relative" }}
      >
        {!isSmall && (
          <p
            style={{
              position: "absolute",
              top: "50%",
              transform: "rotate(-90deg)",
              marginLeft: "-3rem",
            }}
            className="minimal-index text-dark"
          >
            ABOUT US
          </p>
        )}
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <H2 className="text-dark text-center text-lg-right text-uppercase font-weight-bold">
              About Us
              <div>
                <hr
                  style={{
                    margin: "0",
                    width: isSmall ? "50%" : "5rem",
                    float: "right",
                    background: "#cc040c",
                  }}
                />
                <hr
                  style={{
                    margin: "0",
                    width: isSmall ? "50%" : "5rem",
                    float: "right",
                    background: "#049cf4",
                  }}
                />
              </div>
            </H2>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-3 pr-lg-5 d-flex flex-row flex-lg-column border-right">
            <div className="my-4 px-2 row">
              <div className="col pr-lg-5 text-center text-lg-right">
                <CountUp
                  end={75}
                  start={0}
                  startOnMount={false}
                  duration={2}
                  delay={0.1}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        className="h1 font-weight-bold display-4 text-dark mb-0"
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <sup className="text-danger h3">+</sup>
                <p>More Stats</p>
              </div>
            </div>

            <div className="my-4 px-2 row">
              <div className="col pr-lg-5 text-center text-lg-right">
                <CountUp
                  end={25}
                  start={0}
                  startOnMount={false}
                  duration={2}
                  delay={0.1}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        className="h1 font-weight-bold display-4 text-dark mb-0"
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <sup className="text-primary h3">+</sup>
                <p>Another Stats</p>
              </div>
            </div>

            <div className="my-4 px-2 row">
              <div className="col pr-lg-5 text-center text-lg-right">
                <CountUp
                  end={100}
                  start={0}
                  startOnMount={false}
                  duration={2}
                  delay={0.1}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        className="h1 font-weight-bold display-4 text-dark mb-0"
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <sup className="text-danger h3">+</sup>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-1"></div>

          <div className="d-flex flex-column col-lg-6">
            <p
              className="text-dark"
              style={{
                lineHeight: "1.8",
                textAlignLast: isSmall ? "center" : "right",
                textAlign: isSmall ? "center" : "justify",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              blandit facilisis accumsan. Duis tempor enim id justo pulvinar, at
              pellentesque turpis sollicitudin. Donec arcu neque, porta a turpis
              vel, luctus bibendum odio. Fusce facilisis quis odio sed molestie.
              Mauris non hendrerit nulla. Aliquam ligula justo, mattis ut lectus
              ac, ultrices vehicula nulla. Cras tristique, dolor eget posuere
              hendrerit, lorem nisl volutpat lacus, in mollis purus eros
              tristique justo. Donec sed scelerisque odio, nec ultrices leo.
            </p>
            <p
              className="text-dark my-auto"
              style={{
                lineHeight: "1.8",
                textAlignLast: isSmall ? "center" : "right",
                textAlign: isSmall ? "center" : "justify",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              blandit facilisis accumsan. Duis tempor enim id justo pulvinar, at
              pellentesque turpis sollicitudin. Donec arcu neque, porta a turpis
              vel, luctus bibendum odio. Fusce facilisis quis odio sed molestie.
              Mauris non hendrerit nulla. Aliquam ligula justo, mattis ut lectus
              ac, ultrices vehicula nulla. Cras tristique, dolor eget posuere
              hendrerit, lorem nisl volutpat lacus, in mollis purus eros
              tristique justo. Donec sed scelerisque odio, nec ultrices leo.
            </p>
            <Link
              className="mt-4 mt-lg-auto ml-lg-auto text-no-decor text-gradient"
              to="/about"
            >
              <div className="col col-lg-auto d-flex align-items-center  text-gradient px-lg-0 widen text-uppercase font-weight-light">
                <h3 className="mb-0">Know More</h3>{" "}
                <img className="ml-3" width="50px" src={LinkArrow} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-1"></div>
        </div>
      </Container>

      <Container
        className="my-5 py-lg-5 bg-light"
        fluid
        style={{ position: "relative" }}
      >
        {!isSmall && (
          <p
            style={{
              position: "absolute",
              top: "50%",
              transform: "rotate(90deg)",
              right: 0,
              marginRight: "-2rem",
            }}
            className="minimal-index text-dark"
          >
            PROJECTS
          </p>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <H2 className="text-dark text-center text-lg-left text-uppercase font-weight-bold">
              Projects
              <div>
                <hr
                  style={{
                    margin: "0",
                    width: isSmall ? "50%" : "5rem",
                    float: "left",
                    background: "#cc040c",
                  }}
                />
                <hr
                  style={{
                    margin: "0",
                    width: isSmall ? "50%" : "5rem",
                    float: "left",
                    background: "#049cf4",
                  }}
                />
              </div>
            </H2>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-9">
            <div className="row">
              {projectData.map((data) => (
                <div className="col-12 col-lg-4 mb-4 mb-lg-5" key={data.title}>
                  <div style={{ position: "relative" }} className="hoverBox">
                    <Link
                      className="p-4 p-lg-5 text-no-decor hoverLink"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                      to={data.to}
                    >
                      <fieldset
                        className="border p-2 h-100"
                        style={{ position: "relative" }}
                      >
                        <legend className="w-auto px-2 widen text-uppercase font-weight-light">
                          {data.title}
                        </legend>
                      </fieldset>
                    </Link>
                    <img src={placeholderProjectImg} width="100%" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const YearText = styled.h1`
  font-size: 30rem;
  -webkit-text-stroke: 3px white;
  color: transparent;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 20rem;
  }
`;

const YearsOf = styled.div`
  font-size: 5rem;
  text-align: center;
  margin-top: -5rem;
  @media (max-width: 1440px) {
    font-size: 4rem;
  }
`;

const H2 = styled.div`
  font-size: 5rem;
  text-align: center;
  @media (max-width: 1440px) {
    font-size: 4rem;
  }
`;

const Exp = styled.div`
  font-size: 6rem;
  text-align: center;
  margin-top: -2rem;
  @media (max-width: 1440px) {
    font-size: 4rem;
  }
`;

export default Home;
