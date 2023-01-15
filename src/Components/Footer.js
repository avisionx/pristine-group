import React from "react";
import logo from "../img/logo-white.png";
import logo_old from "../img/logo-old.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { mdiEmailOutline, mdiMapMarkerOutline, mdiPhoneOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { projectData } from "../Containers/Home";
import skyline from "../img/skyline.webp";

const Footer = ({ isSmall }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${skyline})`,
          backgroundRepeat: "repeat-x",
          width: "200vw",
          height: "150px",
          backgroundPositionX: "-150px",
          backgroundSize: "auto 150px",
        }}
      ></div>
      <Container fluid className="small bg-dark">
        <Row className="text-light pt-0 pt-lg-5 pb-4 d-flex justify-content-center">
          <Col sm="12" lg="3">
            <Link to="/" className="py-3" replace>
              <div className="row no-gutter d-flex align-items-center">
                <Col xs="5">
                  <img width="100%" src={logo} alt="" className="img-fluid" />
                </Col>
                <Col xs="3" className="border-light border-left ">
                  <img
                    width={isSmall ? "100%" : "80%"}
                    className="border border-light"
                    src={logo_old}
                    alt=""
                  />
                </Col>
              </div>
            </Link>
            <p
              className="mb-0 mt-2 text-uppercase font-weight-light widen text-light h5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Redefining Real Estate
            </p>
            {!isSmall && (
              <p className="mt-5 pt-4 mb-0">
                © Gupta’s Pristine Group {new Date().getFullYear()}. All rights
                reserved. Developed by{" "}
                <a
                  className="text-light"
                  href="https://avisionx.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Avi Garg</u>.
                </a>
              </p>
            )}
          </Col>
          <Col sm="12" lg="3">
            <h5 className="text-light text-uppercase widen-lg mb-1 mt-4 mt-lg-0">
              Contact
            </h5>
            <div className="pb-3 pt-1">
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
            <ListGroup className="no-list mt-2 d-flex">
              <Row className="mb-2">
                <Col xs="auto">
                  <Icon path={mdiMapMarkerOutline} size={1} />{" "}
                </Col>
                <Col className="pl-0">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://goo.gl/maps/dVosGt7vb6haAF518"
                    className=" text-light"
                  >
                    303, Ashok Bhawan - 93, Nehru Place, <br />
                    New Delhi - 110019
                  </a>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs="auto">
                  <Icon path={mdiPhoneOutline} size={1} />{" "}
                </Col>
                <Col className="pl-0">
                  <p className="mb-0 text-light">Contact</p>
                  <a href="tel:+917701919922" className=" text-light">
                    +91 - 7701919922
                  </a>
                  <p className="mb-0 mt-1 text-light">Tele Fax</p>
                  <a href="tel:+911126431151" className=" text-light">
                    +91 - 11-26431151
                  </a>
                  ,&nbsp;
                  <a href="tel:+911126431148" className=" text-light">
                    +91 - 11-26431148
                  </a>
                  <br />
                  <span className="text-white" style={{ opacity: "0.7" }}>
                    Mon to Fri - 11AM to 5PM
                  </span>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs="auto">
                  <Icon path={mdiEmailOutline} size={1} />{" "}
                </Col>
                <Col className="pl-0">
                  <a
                    href="mailto:care@grouppristine.com"
                    className=" text-light"
                  >
                    care@grouppristine.com
                  </a>
                </Col>
              </Row>
            </ListGroup>
          </Col>
          <Col sm="12" lg="2">
            <h5 className="text-light text-uppercase widen-lg mb-1 mt-4 mt-lg-0">
              Quick Links
            </h5>
            <div className="pb-3 pt-1">
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
            <ListGroup className="no-list mt-2">
              <Link to="/" className="text-light" replace>
                Home
              </Link>
              <Link to="/about" className="text-light" replace>
                About Us
              </Link>
              <Link to="/news" className="text-light" replace>
                News
              </Link>
              <Link to="/careers" className="text-light" replace>
                Careers
              </Link>
              <Link to="/contact" className="text-light" replace>
                Contact Us
              </Link>
            </ListGroup>
          </Col>
          <Col sm="12" lg="auto">
            <h5 className="text-light text-uppercase widen-lg mb-1 mt-4 mt-lg-0">
              Projects
            </h5>
            <div className="pb-3 pt-1">
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
            <ListGroup className="no-list mt-2">
              {projectData.map((data) => (
                <Link
                  key={data.title}
                  to={data.to}
                  className="text-light"
                  replace
                >
                  {data.title}
                </Link>
              ))}
            </ListGroup>
          </Col>

          {isSmall && (
            <Col>
              <p className="mt-5 mb-4">
                © Gupta’s Pristine Group {new Date().getFullYear()}. All rights
                reserved. Developed by{" "}
                <a
                  className="text-light"
                  href="https://avisionx.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Avi Garg</u>.
                </a>
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Footer;
