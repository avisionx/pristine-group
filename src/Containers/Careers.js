import React from "react";
import { H2 } from "./Home";
import career_img from "../img/careers.png";

const Careers = ({ isSmall }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          Careers
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
          <div className="d-flex justify-content-center flex-column order-3 order-lg-2 col-sm-12 col-lg-7">
            <h2 className="text-primary font-weight-bold mb-4 mt-3 mt-lg-0">
              Grow Your Career With Us
            </h2>
            <form
              action="https://mailthis.to/USERNAME"
              method="POST"
              enctype="multipart/form-data"
            >
              <div class="form-group">
                <label for="name">
                  Full Name<span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Full Name"
                  name="name"
                  required
                />
                <small id="emailHelp" class="form-text text-muted">
                  Please enter your full legal name here.
                </small>
              </div>
              <div class="form-group">
                <label for="email">
                  Email Address<span class="text-danger">*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  required
                  name="_replyto"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll contact you on this email for further notice.
                </small>
              </div>
              <div class="form-group">
                <label for="contact">
                  Contact Number<span class="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="contact"
                  aria-describedby="contactHelp"
                  placeholder="Contact Number"
                  required
                  name="contact"
                />
                <small id="contactHelp" class="form-text text-muted">
                  We'll contact you on this number for further notice.
                </small>
              </div>
              <div class="form-group">
                <label for="designation">Designation<span class="text-danger">*</span></label>
                <input
                  type="text"
                  list="designation_list"
                  class="form-control"
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
                <small id="designationHelp" class="form-text text-muted">
                  Please choose/enter the designation you think you are best suited
                  for.
                </small>
              </div>
              <div class="form-group">
                <label for="current_employer">Current Employer</label>
                <input
                  type="text"
                  class="form-control"
                  id="current_employer"
                  aria-describedby="currentEmployerHelp"
                  placeholder="Current Employer"
                  name="current_employer"
                />
                <small id="currentEmployerHelp" class="form-text text-muted">
                  Please enter your current employer name if any.
                </small>
              </div>
              <div class="form-group">
                <label for="linkedin">LinkedIn Profile</label>
                <input
                  type="text"
                  class="form-control"
                  id="linkedin"
                  aria-describedby="linkedinHelp"
                  placeholder="LinkedIn Profile"
                  name="linkedin"
                />
                <small id="linkedinHelp" class="form-text text-muted">
                  Please enter link to your LinkedIn profile.
                </small>
              </div>
              <label>
                Upload CV/Resume<span class="text-danger">*</span>
              </label>
              <input
                type="file"
                class="form-control-file"
                id="resume"
                name="file"
                required
              />
              <small id="designationHelp" class="form-text text-muted">
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
              <button type="submit" class="rounded-0 border-0 mt-5 ml-auto mr-3 p-1 btn btn-primary bg-gradient btn-md">
                <div className="bg-white px-5 text-dark py-2">
                Submit
                </div>
              </button>
            </form>
          </div>
          <div className="text-center mt-4 mt-lg-0 order-1 order-lg-3 col-sm-12 col-lg-2">
            <img src={career_img} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;