import React from "react";
import { H2 } from "./Home";
import career_img from "../img/careers.png";

const Careers = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span>Careers</span>
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
                opacity: 0.8
              }}
            >
              Careers
            </h5>
          </div>
          <div className="d-flex justify-content-center flex-column order-3 order-lg-2 col-sm-12 col-lg-6">
            <h2 className="text-primary font-weight-bold mb-4 mt-3 mt-lg-0">
              Grow Your Career With Us
            </h2>
            <form
              action="https://mailthis.to/USERNAME"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="form-group">
                <label htmlFor="name">
                  Full Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Full Name"
                  name="name"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please enter your full legal name here.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email Address<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  required
                  name="_replyto"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll contact you on this email for further notice.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="contact">
                  Contact Number<span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  aria-describedby="contactHelp"
                  placeholder="Contact Number"
                  required
                  name="contact"
                />
                <small id="contactHelp" className="form-text text-muted">
                  We'll contact you on this number for further notice.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation<span className="text-danger">*</span></label>
                <input
                  type="text"
                  list="designation_list"
                  className="form-control"
                  id="designation"
                  aria-describedby="designationHelp"
                  placeholder="Designation"
                  name="designation"
                  required
                />
                <datalist id="designation_list">
                  <option value="Marketing &amp; Sales" />
                  <option value="Operations" />
                  <option value="Trainings" />
                  <option value="PR &amp; Liaison" />
                  <option value="Architecture" />
                  <option value="Designing &amp; Concept Development" />
                  <option value="Accounts &amp; Finance" />
                  <option value="Customer Service" />
                </datalist>
                <small id="designationHelp" className="form-text text-muted">
                  Please choose/enter the designation you think you are best suited
                  for.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="current_employer">Current Employer</label>
                <input
                  type="text"
                  className="form-control"
                  id="current_employer"
                  aria-describedby="currentEmployerHelp"
                  placeholder="Current Employer"
                  name="current_employer"
                />
                <small id="currentEmployerHelp" className="form-text text-muted">
                  Please enter your current employer name if any.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn Profile</label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedin"
                  aria-describedby="linkedinHelp"
                  placeholder="LinkedIn Profile"
                  name="linkedin"
                />
                <small id="linkedinHelp" className="form-text text-muted">
                  Please enter link to your LinkedIn profile.
                </small>
              </div>
              <label>
                Upload CV/Resume<span className="text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control-file"
                id="resume"
                name="file"
                required
              />
              <small id="designationHelp" className="form-text text-muted">
                Please upload your latest resume/cv in pdf format.
              </small>
              <input
                type="hidden"
                name="_subject"
                value="Careers form submitted"
              />
              <input type="hidden" name="_honeypot" value="" />
              <input
                type="hidden"
                name="_confirmation"
                value="We'll find best opportunity for you at Pristine Group & get in touch with you shortly!"
              />
              <button type="submit" className="rounded-0 border-0 mt-5 ml-auto mr-3 p-1 btn btn-primary bg-gradient btn-md">
                <div className="bg-white px-5 text-dark py-2">
                Submit
                </div>
              </button>
            </form>
          </div>
          <div className="text-center mt-4 mt-lg-0 order-1 order-lg-3 col-sm-12 col-lg-3">
            <img src={career_img} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
