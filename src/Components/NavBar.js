import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import logo_white from "../img/logo-white.png";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { projectData } from "../Containers/Home";

const NavBar = ({ isSmall }) => {
  const [collapsed, setCollapsed] = useState(true);
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
  }, [location]);

  const navLinks = () => (
    <>
      <CustomNavLink
        className={`p-3 mx-2 ${
          scrollPosition
            ? "text-dark"
            : isSmall && !collapsed
            ? "text-dark"
            : "text-white"
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
            scrollPosition
              ? "text-dark"
              : isSmall && !collapsed
              ? "text-dark"
              : "text-white"
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
              <CustomNavLink className="p-3 mx-2 text-dark w-100" style={{ whiteSpace: "nowrap" }} to={data.to}>
                {data.title}
              </CustomNavLink>
            </div>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
      <CustomNavLink
        className={`p-3 mx-2 ${
          scrollPosition
            ? "text-dark"
            : isSmall && !collapsed
            ? "text-dark"
            : "text-white"
        }`}
        to="/news"
      >
        News
      </CustomNavLink>
      <CustomNavLink
        className={`p-3 mx-2 ${
          scrollPosition
            ? "text-dark"
            : isSmall && !collapsed
            ? "text-dark"
            : "text-white"
        }`}
        to="/careers"
      >
        Careers
      </CustomNavLink>
      <CustomNavLink
        className={`p-3 mx-2 ${
          scrollPosition
            ? "text-dark"
            : isSmall && !collapsed
            ? "text-dark"
            : "text-white"
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
          scrollPosition
            ? "shadow"
            : isSmall && !collapsed
            ? ""
            : "bg-transparent"
        }  px-lg-5 py-0 align-items-center`}
        color="white"
        expand="lg"
        fixed="top"
        light
      >
        <div className="d-flex w-100">
          <Link to="/" className="py-3" replace>
            <img
              src={
                scrollPosition
                  ? logo
                  : isSmall && !collapsed
                  ? logo
                  : logo_white
              }
              alt=""
              height={`${isSmall ? "50px" : "80px"}`}
            />
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
                scrollPosition
                  ? "#404040"
                  : isSmall && !collapsed
                  ? "#404040"
                  : "#f8f9fa"
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
