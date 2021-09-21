import React from "react";
import { H2 } from "./Home";
import Slideshow from "../Components/Slideshow";
const Farmhouse = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span style={{ fontSize: "3rem" }}>Farmhouses</span>
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
              Luxury Farmhouses
            </h5>
          </div>
          <div
            className="d-flex mt-5 mt-lg-0 justify-content-start flex-column  col-sm-12 col-lg-5 "
            style={{ minHeight: "50vh" }}
          >
            <p className="text-dark">
              Considered to be one of the most substantial firms in this space,
              Gupta’s Pristine has been one of the pioneers in developing the
              luxury farmhouse market in Delhi-NCR. Today, a thriving sector of
              the Real Estate industry, the group’s exposure is concentrated in
              the South Delhi region.
            </p>
            <p className="text-dark">
              Since inception, Pristine has successfully developed and delivered
              multiple projects in some of the most prime residential areas of
              Delhi such as Chattarpur (Main Road), Vasant Kunj, Dera Mandi,
              Fatehpur Beri, Radhey Mohan Drive, Gadaipur, Asola and various
              other areas in Mehrauli.
            </p>
            <p className="text-dark">
              Projects delivered by Gupta’s Pristine have always stood out as
              the most picturesque and magnificent developments in the market.
              Always held to be the finest quality of construction
              fully-equipped with state-of-the-art facilities and features
              coupled with scenic landscaping and grand elevations, the group’s
              projects serve as landmarks in the farmhouse sector, setting new
              standards and paving the way for innovation and ingenuity.
              Pristine Group continues to actively engage in this sector.
            </p>
            <h4 className="text-dark text-center text-lg-left mb-4 mt-5 text-uppercase font-weight-bold">
              <span>{!isSmall && "More"} Featured Projects</span>
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
            <div className="row">

            <div className="col-6 mt-3">
                <img
                  src={process.env.PUBLIC_URL + "/farmhouse/7.jpg"}
                  alt=""
                  className="img-fluid w-100 border"
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src={process.env.PUBLIC_URL + "/farmhouse/8.jpg"}
                  alt=""
                  className="img-fluid w-100 border"
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src={process.env.PUBLIC_URL + "/farmhouse/4.jpg"}
                  alt=""
                  className="img-fluid w-100 border"
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src={process.env.PUBLIC_URL + "/farmhouse/5.jpg"}
                  alt=""
                  className="img-fluid w-100 border"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-4 mt-lg-0  col-sm-12 col-lg-4">
            {!isSmall && <h4 className="text-dark text-center mb-4 text-uppercase font-weight-bold">
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
            </h4>}
            <div>
              <Slideshow
                slideImages={[
                  {
                    img: process.env.PUBLIC_URL + "/farmhouse/1.jpg",
                    text: "",
                  },
                  {
                    img: process.env.PUBLIC_URL + "/farmhouse/2.jpg",
                    text: "",
                  },
                  {
                    img: process.env.PUBLIC_URL + "/farmhouse/3.jpg",
                    text: "",
                  },
                ]}
              />
            </div>
            <div className="mt-5 border">
              <img
                src={process.env.PUBLIC_URL + "/farmhouse/6.jpg"}
                alt=""
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farmhouse;
