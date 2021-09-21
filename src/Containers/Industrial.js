import React from "react";
import { H2 } from "./Home";

const Industrial = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span style={{ fontSize: "3rem" }}>Industrial</span>
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
              Industrial
            </h5>
          </div>
          <div
            className="d-flex mt-5 mt-lg-0 justify-content-start flex-column  col-sm-12 col-lg-5 "
            style={{ minHeight: "50vh" }}
          >
            <p className="text-dark">
              Pristine Group has successfully developed and delivered numerous
              Industrial projects in the form of industrial sheds and factory
              buildings of various sizes in Faridabad, concentrated in areas
              such as DLF Industrial Estate to cater to both purchase and lease
              requirements of our clients. The company actively trades in this
              segment.
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
              <img
                src={process.env.PUBLIC_URL + "/industrial/1.jpg"}
                alt=""
                className="img-fluid w-100 border"
              />
              <img
                src={process.env.PUBLIC_URL + "/industrial/2.png"}
                alt=""
                className="img-fluid w-100 border mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industrial;
