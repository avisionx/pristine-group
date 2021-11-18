import React from "react";
import { Link } from "react-router-dom";
import { YearsOf, Exp } from "./Home";

const Error404 = ({ isSmall }) => {
  return (
    <>
      <div
        className="container-fluid mt-5 d-flex align-items-center justify-content-center"
        style={{ minHeight: "500px" }}
      >
        <div className="mt-5">
          <YearsOf className="text-dark mb-0 text-uppercase font-weight-bold">
            ERROR 404!
          </YearsOf>
          <Exp className="text-dark font-weight-light" style={{fontSize: '1.8rem', marginTop: '-1rem'}}>
            Looks like you're lost!
          </Exp>
          <p className="text-center mb-0 mt-1">Go back <Link to="/">Home</Link>.</p>
        </div>
      </div>
    </>
  );
};

export default Error404;
