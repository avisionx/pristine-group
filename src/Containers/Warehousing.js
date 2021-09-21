import React from "react";
import { H2 } from "./Home";

const Warehousing = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span style={{ fontSize: "3rem" }}>Warehousing</span>
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
              Warehousing
            </h5>
          </div>
          <div
            className="d-flex mt-5 mt-lg-0 justify-content-start flex-column  col-sm-12 col-lg-5 "
            style={{ minHeight: "50vh" }}
          >
            <p className="text-dark">
              Towering across 9 floors, Pristine Group has created a
              state-of-the-art Cold Store Warehouse for perishable food & fruits
              at the Azadpur Mandi in North Delhi.
            </p>
            <p className="text-dark">
              Modern warehousing is a crucial link between manufacturer/producer
              and the stockist/retailer and there is a massive demand of Cold
              Storage in Northern India due to high temperature and humid
              conditions for most part of the year. Pristine Group venturing
              into this business has proved to be highly profitable in terms of
              its growth since development.
            </p>
            <p className="text-dark">
              The Delhi-Azadpur Cold Storage developed by Pristine Group
              persists as one of the largest Cold Store Warehouse in Delhi/NCR.
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
            <div className="border">
              <img
                src={process.env.PUBLIC_URL + "/warehousing/1.jpg"}
                alt=""
                className="img-fluid w-100"
              />
              <h5 className="text-gradient my-3 text-uppercase widen">
                Delhi Azadpur Cold Storage
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warehousing;
