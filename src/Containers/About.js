import React from "react";
import { H2 } from "./Home";

const About = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
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
        <div className="row d-flex justify-content-center">
          <div className="d-none d-lg-block col-sm-12 col-lg-auto">
            <h5
              className="text-gradient  text-nowrap font-weight-bold mb-3 display-1"
              style={{
                position: "absolute",
                transform: "rotate(-90deg)",
                right: "3rem",
                top: "-6rem",
                transformOrigin: "bottom right",
              }}
            >
              About Us
            </h5>
          </div>
          <div className="d-flex justify-content-center flex-column order-3 order-lg-2 col-sm-12 col-lg-5">
            <h2 className="text-primary font-weight-bold mb-4 mt-3 mt-lg-0">
              We Are On A Mission To Redifine Real Estate
            </h2>
            <p className="text-dark">
              Real Estate Pioneers Late Shri Surender Kumar Gupta and Shri
              Rajendra Kumar Gupta under the guidance of their father and the
              company’s north star, Late Shri Lala Ram Bhaj Gupta, laid the
              foundation of Pristine Group in 1973. Building on their legacy and
              following in their footprints, today, the future generations of
              the Gupta Family are at the helm of the company, scaling
              unprecedented heights and redefining real estate as we know it.
            </p>
            <p className="text-dark">
              As one of the foundational builders of the Delhi-NCR region, the
              group offers and has successfully developed a bouquet of real
              estate products across various segments: Residential, Commercial,
              Retail, Warehousing, Industrial and Luxury Farmhouses. The group
              also has roots and operations expanding into Punjab and Haryana.
            </p>
            <p className="text-dark">
              As a fourth-generation business house, we believe in keeping true
              to our roots. Family values and traditions are carefully preserved
              in our company culture. At the same time, the group has
              endeavoured to keep up with time, realising the dynamic and ever
              changing nature of the real estate sector and the Indian economy
              at large. Constant innovation, perseverance, and a drive to always
              be one step ahead of the market has fueled the groups growth and
              evolution through time.
            </p>
            <p className="text-dark">
              With our team of seasoned industry professionals with decades of
              experience and the fresh new ideas of incoming generations, we at
              Pristine along with our proficient family of employees and
              stakeholders are optimistic of the future.
            </p>
            <p className="text-dark">
              The client’s needs and wants stand paramount at Pristine,
              delivering the highest quality of real estate is not just a legacy
              but a responsibility of the company. Our enduring relationships
              with customers and associates as well as our tall standing real
              estate projects are testament to the group’s promise and ethos.
            </p>
            <p className="text-dark">
              Today, a revered name and an established brand in the Indian Real
              Estate market, Gupta’s Pristine has carried on the legacy of
              satisfied clients & exceptional quality products, winning the
              trust, hearts and smiles of all our stakeholders while developing
              our most prized asset – Our Goodwill.
            </p>
          </div>
          <div className="text-center mt-4 mt-lg-0 order-1 order-lg-3 col-sm-12 col-lg-4">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="img-fluid w-75"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
