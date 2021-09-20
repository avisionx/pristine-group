import React, { useEffect, useRef, useState } from "react";
import placeholderBannerImg from "../img/image.jpg";
import placeholderProjectImg from "../img/placeholder.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../fullscreen-carousel.scss";
import styled from "styled-components";
import { mdiChevronDown, mdiClockTimeThreeOutline, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Container from "reactstrap/lib/Container";
import { Link, useHistory } from "react-router-dom";
import LinkArrow from "../img/link-arrow.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const projectData = [
  {
    title: "Residential",
    to: "/projects/residential",
  },
  {
    title: "Commercial",
    to: "/projects/commercial",
  },
  {
    title: "Retail",
    to: "/projects/retail",
  },
  {
    title: "Luxury Farmhouses",
    to: "/projects/luxury_farmhouses",
  },
  {
    title: "Warehousing",
    to: "/projects/warehousing",
  },
  {
    title: "Industrial",
    to: "/projects/industrial",
  },
];

const Home = ({ isSmall }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [newsDate, setNewsDate] = useState(0);
  let history = useHistory();
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

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/avisionx/pristine-group-news-api/main/news-top.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.news);
        const date = data.updated_at.date;
        const time = data.updated_at.time;
        const newsDate = new Date(
          date.Y,
          parseInt(date.m) - 1,
          date.d,
          parseInt(time.H) + 5,
          parseInt(time.M) + 30
        );
        const curDate = new Date();
        setNewsDate(
          Math.abs(Math.ceil(((newsDate - curDate) % 86400000) / 3600000))
        );
      });
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
          <YearText style={{ position: "relative" }}>
            <i>{new Date().getFullYear() - 1973}</i>
            <sup
              style={{
                position: isSmall ? "relative" : "absolute",
                top: isSmall ? "none" : "20%",
                right: isSmall ? "0" : "-25%",
                fontSize: "40%",
              }}
            >
              +
            </sup>
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
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "999",
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
                    onClick={() => {
                      history.push("/contact");
                    }}
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
                  end={new Date().getFullYear() - 1973}
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
                <p>Year Legacy</p>
              </div>
            </div>

            <div className="my-4 px-2 row">
              <div className="col pr-lg-5 text-center text-lg-right">
                <CountUp
                  end={10}
                  start={0}
                  startOnMount={false}
                  duration={2}
                  delay={0.1}
                  redraw={true}
                  suffix={"L"}
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
                <p>Sq. Ft. Developed </p>
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
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="col-1"></div>

          <div className="d-flex flex-column col-lg-6">
            <p
              className="text-dark my-auto"
              style={{
                lineHeight: "1.8",
                textAlignLast: isSmall ? "center" : "right",
                textAlign: isSmall ? "center" : "justify",
              }}
            >
              Real Estate Pioneers Late Shri Surender Kumar Gupta and Shri
              Rajendra Kumar Gupta under the guidance of their father and the
              company’s north star, Late Shri Lala Ram Bhaj Gupta, laid the
              foundation of Pristine Group in 1973. Building on their legacy and
              following in their footprints, today, the future generations of
              the Gupta Family are at the helm of the company, scaling
              unprecedented heights and redefining real estate as we know it.
            </p>
            <p
              className="text-dark mt-4 mb-auto"
              style={{
                lineHeight: "1.8",
                textAlignLast: isSmall ? "center" : "right",
                textAlign: isSmall ? "center" : "justify",
              }}
            >
              As one of the foundational builders of the Delhi-NCR region, the
              group offers and has successfully developed a bouquet of real
              estate products across various segments: Residential, Commercial,
              Retail, Warehousing, Industrial and Luxury Farmhouses. The group
              also has roots and operations expanding into Punjab and Haryana.
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
                    <figure className="mb-0">
                      <img src={placeholderProjectImg} width="100%" alt="" />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container
        className="my-5 py-lg-5 "
        fluid
        style={{ position: "relative" }}
      >
        {!isSmall && (
          <p
            style={{
              position: "absolute",
              top: "50%",
              transform: "rotate(-90deg)",
              marginLeft: "-2rem",
            }}
            className="minimal-index text-dark"
          >
            NEWS
          </p>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p
              style={{
                position: "absolute",
                bottom: isSmall ? "-3.2rem" : "-1rem",
                left: isSmall ? "2rem" : "1rem",
                marginRight: "-7rem",
              }}
              className="minimal-text text-gradient"
            >
              <Icon path={mdiClockTimeThreeOutline} size={1} color="#049cf4" />{" "}
              LAST UPDATED {newsDate}HRS AGO
            </p>
            <H2 className="text-dark text-center text-lg-right text-uppercase font-weight-bold">
              News
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
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="row">
              {newsData.map((data) => (
                <div
                  className="col-12 col-lg-4 mb-4 mb-lg-5 text-no-decor"
                  key={data.title}
                >
                  <Card className="rounded-0 shadow h-100">
                    <CardImg
                      top
                      className="rounded-0"
                      width="100%"
                      src={data.img}
                      alt=""
                    />
                    <CardBody className="d-flex flex-column">
                      <CardTitle className="text-dark widen" tag="h5">
                        {data.title.replace(/^(.{70}[^\s]*).*/, "$1")}
                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        <Badge color="primary" pill>
                          {data.tag}
                        </Badge>
                      </CardSubtitle>
                      <CardText className="text-dark small">
                        {data.para.substring(0, 140)}...
                      </CardText>
                      <a
                        className="text-gradient text-right small mt-auto"
                        href={data.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Continue Reading
                        <img
                          className="ml-3"
                          width="20px"
                          src={LinkArrow}
                          alt=""
                        />
                      </a>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <Link className="mt-4 row text-no-decor text-gradient" to="/news">
              <div className="col col-lg-auto mx-auto d-flex align-items-center text-gradient px-lg-0 widen text-uppercase font-weight-light">
                <h3 className="mb-0">Read More</h3>{" "}
                <img className="ml-3" width="50px" src={LinkArrow} alt="" />
              </div>
            </Link>
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
    font-size: 12rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const YearsOf = styled.div`
  font-size: 5rem;
  text-align: center;
  margin-top: -5rem;
  @media (max-width: 1440px) {
    font-size: 3.5rem;
    margin-bottom: 0.4rem;
  }
`;

export const H2 = styled.div`
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
    font-size: 3.5rem;
  }
`;

export default Home;
