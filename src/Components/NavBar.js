import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import logo_old from "../img/logo-old.jpg";
import logo_white from "../img/logo-white.png";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { projectData } from "../Containers/Home";

const NavBar = ({ isSmall }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isHome, setIsHome] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset > 10);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position > 10);
  };

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsHome(window.location.pathname === "/");
  }, [location]);

  const navLinks = () => (
    <>
      <CustomNavLink
        className={`p-3 mx-2 ${
          isHome
            ? scrollPosition
              ? "text-dark"
              : isSmall && !collapsed
              ? "text-dark"
              : "text-white"
            : "text-dark"
        }`}
        to="/about"
      >
        About Us
      </CustomNavLink>
      <UncontrolledDropdown>
        <DropdownToggle
          nav
          caret
          className={`p-3 mx-2 ${
            isHome
              ? scrollPosition
                ? "text-dark"
                : isSmall && !collapsed
                ? "text-dark"
                : "text-white"
              : "text-dark"
          }`}
        >
          Projects
        </DropdownToggle>
        <DropdownMenu
          className="border-0 rounded-0 shadow text-left"
          style={{ minWidth: "0" }}
        >
          {projectData.map((data) => (
            <div className="my-3" key={data.title}>
              <CustomNavLink
                className="p-3 mx-2 text-dark w-100"
                style={{ whiteSpace: "nowrap" }}
                to={data.to}
              >
                {data.title}
              </CustomNavLink>
            </div>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
      <CustomNavLink
        className={`p-3 mx-2 ${
          isHome
            ? scrollPosition
              ? "text-dark"
              : isSmall && !collapsed
              ? "text-dark"
              : "text-white"
            : "text-dark"
        }`}
        to="/news"
      >
        News
      </CustomNavLink>
      <CustomNavLink
        className={`p-3 mx-2 ${
          isHome
            ? scrollPosition
              ? "text-dark"
              : isSmall && !collapsed
              ? "text-dark"
              : "text-white"
            : "text-dark"
        }`}
        to="/careers"
      >
        Careers
      </CustomNavLink>
      <CustomNavLink
        className={`p-3 mx-2 ${
          isHome
            ? scrollPosition
              ? "text-dark"
              : isSmall && !collapsed
              ? "text-dark"
              : "text-white"
            : "text-dark"
        }`}
        to="/contact"
      >
        Contact Us
      </CustomNavLink>
    </>
  );

  return (
    <>
      <Navbar
        className={`${
          isHome
            ? `${
                scrollPosition
                  ? "shadow"
                  : isSmall && !collapsed
                  ? ""
                  : "bg-transparent"
              }`
            : "shadow "
        }  px-lg-5 py-0 align-items-center`}
        color="white"
        expand="lg"
        fixed="top"
        light
        style={{ zIndex: 9999, maxHeight: isSmall ? "auto" : "130px" }}
      >
        <div className="d-flex w-100">
          <Link to="/" className="py-3" replace>
            <div className="row no-gutter d-flex align-items-center">
              <Col size="auto">
                <img
                  width={isSmall ? "120px" : "250px"}
                  src={
                    isHome
                      ? scrollPosition
                        ? logo
                        : isSmall && !collapsed
                        ? logo
                        : logo_white
                      : logo
                  }
                  alt=""
                  className="img-fluid"
                />
              </Col>
              <Col size="auto" className="d-none d-md-block border-light border-left ">
                <img
                  width="60px"
                  className="border border-light"
                  src={logo_old}
                  alt=""
                />
              </Col>
            </div>
          </Link>
          <div className="ml-auto d-flex align-items-center">
            {!isSmall && (
              <Nav
                navbar
                className={`align-items-center ${
                  collapsed
                    ? "d-none animate__animated animate__fadeOutRight"
                    : "mr-3 animate__animated animate__fadeInRight"
                } ${isSmall && collapsed ? "d-none" : ""}`}
              >
                {navLinks()}
              </Nav>
            )}
            <Hamburger
              size={32}
              direction="left"
              distance="lg"
              easing="ease-in"
              color={
                isHome
                  ? scrollPosition
                    ? "#404040"
                    : isSmall && !collapsed
                    ? "#404040"
                    : "#f8f9fa"
                  : "#404040"
              }
              hideOutline={true}
              duration={0.2}
              onToggle={toggleNavbar}
            />
          </div>
        </div>
        {isSmall && (
          <nav
            className={`${
              collapsed
                ? "d-none"
                : "animate__animated animate__fadeInDown d-flex flex-column"
            }`}
          >
            {navLinks()}
          </nav>
        )}
      </Navbar>
      {!isHome && <div style={{ marginTop: isSmall ? "7rem" : "10rem" }}></div>}
    </>
  );
};

const CustomNavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export default NavBar;
