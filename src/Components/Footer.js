import React from "react";
import logo from "../img/logo-circle-text.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "reactstrap";
import partner2 from "../img/partners/bir.svg";
import partner2_color from "../img/partners/bir-color.svg";
import partner3 from "../img/partners/mrai.png";
import partner3_color from "../img/partners/mrai-color.png";
import AssociateImg from "./AssociateImg";
import { mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

const Footer = () => {
  return (
    <Container className="mt-3">
      <hr className="mb-4" />
      <Row className="text-secondary pt-3">
        <Col sm="12" lg="3">
          <Link to="/" replace>
            <img height="40px" src={logo} alt="" />
          </Link>
          <p className="mb-0 mt-3 text-secondary small">
            Arham Alloy & Steel is the brainchild of true steel industry leaders
            who have worked tirelessly to make a revered name in steel scrap
            trading. Running under the banner of Paras Metal Agency for decades
            it was rebranded as Arham Alloy & Steel Pvt Ltd.
          </p>
          <a
            className="text-secondary"
            href="https://www.linkedin.com/company/aaspl"
            target="_blank"
            style={{ marginLeft: "-2px" }}
            rel="noopener noreferrer"
          >
            <Icon path={mdiLinkedin} size={1} />
          </a>
        </Col>
        <Col sm="12" lg="4">
          <h5 className="text-dark font-weight-bold mb-1 mt-2 mt-lg-0">
            Contact
          </h5>
          <ListGroup className="no-list">
            <li>
              <b>Registered Address:</b> 9375/8, First Floor, Sadar Thana Road,
              Multani Dhanda, Paharganj, New Delhi, India-110055
            </li>
            <li>
              <b>Work Address:</b>{" "}
              <a
                className="text-secondary"
                href="https://goo.gl/maps/QpCxvBwsErqtS21P9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plot No.159, Sohna Road, Sector-24, Faridabad, Haryana,
                India-121005
              </a>
            </li>
            <li>
              <b>Email:</b>{" "}
              <a
                className="text-secondary"
                href="mailto:contact@arhamalloy.com"
              >
                contact@arhamalloy.com
              </a>
            </li>
          </ListGroup>
        </Col>
        <Col sm="12" lg="2">
          <h5 className="text-dark font-weight-bold mb-1 mt-2 mt-lg-0">
            Quick Links
          </h5>
          <ListGroup className="no-list">
            <li>
              <Link to="/" className="text-secondary" replace>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-secondary" replace>
                About
              </Link>
            </li>
            <li>
              <Link to="/sell-your-scrap" className="text-secondary" replace>
                Sell Your Scrap
              </Link>
            </li>
            <li>
              <Link to="/infrastructure" className="text-secondary" replace>
                Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-secondary" replace>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-secondary" replace>
                Contact
              </Link>
            </li>
          </ListGroup>
        </Col>
        <Col sm="12" lg="3">
          <h5 className="text-dark font-weight-bold mb-1 mt-2 mt-lg-0">
            Proud Members of
          </h5>
          <ListGroup className="no-list">
            <li>
              <a
                href="https://www.bir.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                <AssociateImg img1={partner2} img2={partner2_color} />
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://www.mrai.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary "
              >
                <AssociateImg img1={partner3} img2={partner3_color} />
              </a>
            </li>
          </ListGroup>
        </Col>
      </Row>
      <Row className="pb-3 text-secondary mt-4">
        <Col>
          <p className="mb-0 small">
            Copyright © {new Date().getFullYear()} Arham Alloy & Steel Pvt. Ltd.
            | All rights reserved | Made with{" "}
            <span role="img" aria-labelledby="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              className="text-dark"
              href="https://avisionx.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avi Garg
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
