import React from "react";
import { H2 } from "./Home";
import Slideshow from "../Components/Slideshow";
const Retail = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span style={{ fontSize: "3rem" }}>Retail</span>
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
                opacity: 0.8,
              }}
            >
              Retail
            </h5>
          </div>
          <div
            className="d-flex mt-5 mt-lg-0 justify-content-start flex-column  col-sm-12 col-lg-5 "
            style={{ minHeight: "50vh" }}
          >
            <p className="text-dark">
              Taking advantage of the economic boom and sudden surge in demand
              of organised retail hubs in North India, standing true to its
              claim of dynamism, the Pristine Group successfully developed and
              delivered two landmark shopping malls in Faridabad and Khanna,
              Punjab.
            </p>
            <h4 className="text-dark mt-3">Mall & Multiplex at Faridabad</h4>
            <p className="text-dark">
              Pristine Mall Faridabad is located in Sector - 31 and surrounded
              by great catchment with over one million families residing in the
              vicinity of a 2 km radius. Pristine Mall is strategically located
              in close proximity to schools & colleges, open on all sides with 3
              side road connectivity.
            </p>
            <p className="text-dark">
              Towering across 7 floors and covering 80,000 sq. ft. Super area,
              the mall is fully air-conditioned, equipped with escalators,
              elevators and full power backup along with a 600+ car park and a
              3-screen multiplex.
            </p>
            <p className="text-dark">
              It offers hyper shopping store like Vishal Mega Mart mixed with
              great entertainment at our in house Pristine Cinemas & kids play
              zone.
            </p>
            <div className="mt-3 mb-4">
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/retail/Pristine Mall & Multiplex Faridabad.pdf"
                }
                className="text-no-decor btn btn-sm btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="col col-lg-auto d-flex align-items-center px-lg-0 widen text-uppercase font-weight-light">
                  <h5 className="mb-0">Download Brochure</h5>
                </div>
              </a>
            </div>
            <h4 className="text-dark mt-5">
              Mall & Multiplex at Khanna (Punjab)
            </h4>
            <p className="text-dark">
              Pristine City Centre Khanna with great design aesthetics offers
              value shopping, food and entertainment all under one roof.
            </p>
            <p className="text-dark">
              Located at a 40-minute drive from Ludhiana and a 60-minute drive
              from Chandigarh, Pristine Mall is located right on National
              Highway -1 which witnesses more than 1 million non-commercial
              vehicles plying.
            </p>
            <p className="text-dark">
              Pristine Mall Khanna is a sanctioned/ approved project with over
              2,15,000 Sq. Ft. covered area and fully equipped state-of-art
              facilities and services with ample parking of over 250 cars. The
              mall is fully air-conditioned, equipped with escalators, elevators
              and full power backup along with a 2-screen multiplex.
            </p>
            <div className="mt-3 mb-4">
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/retail/Pristine City Centre Khanna.pdf"
                }
                target="_blank"
                className="text-no-decor btn btn-sm btn-outline-primary"
                rel="noopener noreferrer"
              >
                <div className="col col-lg-auto d-flex align-items-center px-lg-0 widen text-uppercase font-weight-light">
                  <h5 className="mb-0">Download Brochure</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="text-center mt-4 mt-lg-0  col-sm-12 col-lg-4">
            <h4 className="text-dark text-center mb-4 text-uppercase font-weight-bold">
              <span>Featured Projects</span>
              <div>
                <hr
                  style={{
                    margin: "0",
                    width: "50%",
                    float: "right",
                    background: "#cc040c",
                  }}
                />
                <hr
                  style={{
                    margin: "0",
                    width: "50%",
                    float: "right",
                    background: "#049cf4",
                  }}
                />
              </div>
            </h4>
            <div>
              <Slideshow
                slideImages={[
                  {
                    img: process.env.PUBLIC_URL + "/retail/1.jpg",
                    text: "",
                  },
                  {
                    img: process.env.PUBLIC_URL + "/retail/2.jpg",
                    text: "",
                  },
                ]}
                head="Mall & Multiplex at Faridabad"
              />
            </div>
            <div className="mt-5 border">
              <img
                src={process.env.PUBLIC_URL + "/retail/3.jpg"}
                alt=""
                className="img-fluid w-100"
              />
              <h5 className="text-gradient my-3 text-uppercase widen">
                Mall & Multiplex at Khanna (Punjab)
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Retail;
