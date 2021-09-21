import React from "react";
import { H2 } from "./Home";
import { Link } from "react-router-dom";
import Slideshow from "../Components/Slideshow";

const Residential = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span style={{fontSize: '3rem'}}>Residential</span>
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
              Residential
            </h5>
          </div>
          <div
            className="d-flex mt-5 mt-lg-0 justify-content-start flex-column  col-sm-12 col-lg-5 "
            style={{ minHeight: "50vh" }}
          >
            <p className="text-dark">
              The Residential sector along with the commercial & retail sectors
              has always been at the core of the operations at Pristine. The
              group has ventured into all possible segments of the residential
              market since its inception and continues to diversify its
              portfolio.
            </p>
            <p className="text-dark">
              Luxury Bungalows, Gated Villa Complexes and Affordable Housing
              currently form the group’s residential portfolio. The group has
              successfully delivered projects in neighbourhoods such as New
              Friends Colony, Greater Kailash, South Extension, Kailash Colony,
              Chirag Enclave, Kalkaji, Malviya Nagar and Chattarpur to name a
              few.
            </p>
            <p className="text-dark">
              Post Covid-19 Pandemic, the group has further expanded its
              portfolio to include affordable flats and builder floors in
              Faridabad where it is already prominently established since
              generations, currently the company boasts a sizable inventory in
              this fast-moving segment.
            </p>
            <p className="text-dark">
              Luxury Farmhouses, a market which the company has pioneered and is
              considered a market-mover in since its inception, is an extension
              to its residential portfolio, more about which can be read{" "}
              <Link to="/projects/luxury_farmhouses">here</Link>.
            </p>
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
                    img: process.env.PUBLIC_URL + "/residential/gated/1.jpg",
                    text: "",
                  },{
                    img: process.env.PUBLIC_URL + "/residential/gated/2.jpg",
                    text: "",
                  },{
                    img: process.env.PUBLIC_URL + "/residential/gated/3.jpg",
                    text: "",
                  },{
                    img: process.env.PUBLIC_URL + "/residential/gated/4.jpg",
                    text: "",
                  },{
                    img: process.env.PUBLIC_URL + "/residential/gated/5.jpg",
                    text: "",
                  },{
                    img: process.env.PUBLIC_URL + "/residential/gated/6.jpg",
                    text: "",
                  },
                ]}
                head="Gated Villa Complex"
              />
            </div>
            <div className="mt-5">
              <Slideshow
                slideImages={[
                  {
                    img: process.env.PUBLIC_URL + "/residential/1.png",
                    text: "Elevation",
                  },
                  {
                    img: process.env.PUBLIC_URL + "/residential/2.png",
                    text: "Structure",
                  },
                  {
                    img: process.env.PUBLIC_URL + "/residential/3.jpg",
                    text: "Floor Plan",
                  },
                ]}
                head="Affordable Housing Projects"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Residential;
