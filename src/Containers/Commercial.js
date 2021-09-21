import React from "react";
import { H2 } from "./Home";

const Commercial = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span style={{fontSize: '3rem'}}>Commercial</span>
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
              Commercial
            </h5>
          </div>
          <div
            className="d-flex mt-5 mt-lg-0 justify-content-start flex-column  col-sm-12 col-lg-5 "
            style={{ minHeight: "50vh" }}
          >
            <p className="text-dark">
              Pristine Group has developed and delivered some of the most
              significant commercial buildings in New Delhi. The group has
              ventured into this segment since its inception and delivered
              landmark projects all around the national capital.
            </p>
            <p className="text-dark">
              Projects have been delivered in densely populated commercial hubs
              such as Green Park, Kalkaji (Multiple Projects), Rajouri Garden,
              East of Kailash, Lajpat Nagar, Mayur Vihar, Shreshtha Vihar,
              Vikaspuri (Multiple Projects), Mayapuri, Pashchim Vihar, Pashchim
              Puri, Pitampura, Azadpur, Ashok Vihar, Shahzadabad and Malviya
              Nagar.
            </p>
            <p className="text-dark">
              All commercial projects of Gupta’s Pristine enjoy 100% occupancy
              today, the group boasts one of the largest commercial real estate
              portfolios in Delhi-NCR. The company actively trades in this
              segment even in today.
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
                  src={process.env.PUBLIC_URL + "/commercial/3.jpg"}
                  alt=""
                  className="img-fluid w-100 border"
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src={process.env.PUBLIC_URL + "/commercial/5.jpg"}
                  alt=""
                  className="img-fluid w-100 border"
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src={process.env.PUBLIC_URL + "/commercial/4.jpg"}
                  alt=""
                  className="img-fluid w-100 border"
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src={process.env.PUBLIC_URL + "/commercial/6.jpg"}
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
              <img
                src={process.env.PUBLIC_URL + "/commercial/1.jpg"}
                alt=""
                className="img-fluid w-100 border"
              />
              <img
                src={process.env.PUBLIC_URL + "/commercial/2.jpg"}
                alt=""
                className="img-fluid w-100 mt-5 border"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commercial;
