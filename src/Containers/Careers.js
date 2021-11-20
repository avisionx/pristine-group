import React, { useState } from "react";
import { H2 } from "./Home";
import career_img from "../img/careers.png";
import ReCAPTCHA from "react-google-recaptcha";

const Careers = ({ isSmall }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    designation: "",
    current_employer: "",
    linkedin: "",
    resume: "",
  });

  const [isSent, setIsSent] = useState("");
  const [isVerified, setIsVerified] = useState(null);
  const [isError, setIsError] = useState(false);
  const submitMessage = (event) => {
    event.preventDefault();
    if (isVerified) {
      let name = state.name;
      let email = state.email;
      let contact = state.contact;
      let designation = state.designation;
      let current_employer = state.current_employer;
      let linkedin = state.linkedin;
      let resume = state.resume;
      var formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfmPXlIWXNV8FAQPnE_9l825r07xk2C8gxr4gaUjK9FKr8Ysg/formResponse?usp=pp_url&entry.1832782791=${name}&entry.862181333=${email}&entry.662822698=${contact}&entry.429037016=${designation}&entry.1926150187=${current_employer}&entry.533786538=${linkedin}&entry.2069208664=${resume}`;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", formUrl);
      xmlHttp.send(null);
      setIsSent("Message Sent!");
      setIsError(false);
      setState({
        name: "",
        email: "",
        contact: "",
        designation: "",
        current_employer: "",
        linkedin: "",
        resume: "",
      });
    } else {
      setIsError(true);
      setIsSent("Verify Captcha!");
    }
  };

  const handleChange = (event) => {
    setIsSent("");

    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

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
                opacity: 0.8,
              }}
            >
              Careers
            </h5>
          </div>
          <div className="d-flex justify-content-center flex-column order-3 order-lg-2 col-sm-12 col-lg-6">
            <h2 className="text-primary font-weight-bold mb-4 mt-3 mt-lg-0">
              Redefine Your Career With Us
            </h2>
            <form onSubmit={submitMessage}>
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
                  value={state.name}
                  onChange={handleChange}
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
                  value={state.email}
                  required
                  onChange={handleChange}
                  name="email"
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
                  onChange={handleChange}
                  value={state.contact}
                  required
                  name="contact"
                />
                <small id="contactHelp" className="form-text text-muted">
                  We'll contact you on this number for further notice.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="designation">
                  Designation<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  list="designation_list"
                  className="form-control"
                  id="designation"
                  aria-describedby="designationHelp"
                  placeholder="Designation"
                  name="designation"
                  value={state.designation}
                  onChange={handleChange}
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
                  Please choose/enter the designation you think you are best
                  suited for.
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
                  value={state.current_employer}
                  onChange={handleChange}
                />
                <small
                  id="currentEmployerHelp"
                  className="form-text text-muted"
                >
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
                  value={state.linkedin}
                  onChange={handleChange}
                />
                <small id="linkedinHelp" className="form-text text-muted">
                  Please enter link to your LinkedIn profile.
                </small>
              </div>
              <label>Attach Link to CV/Resume</label>
              <input
                type="text"
                className="form-control"
                id="resume"
                aria-describedby="resumeHelp"
                placeholder="Link to CV/Resume"
                name="resume"
                value={state.resume}
                onChange={handleChange}
              />
              <small id="resumeHelp" className="form-text text-muted">
                Upload your latest CV/Resume to Google Drive and attach the link
                here.
              </small>

              <ReCAPTCHA
                sitekey="6LcQp-EcAAAAAFWMUKnN3l2LyOhp7SGYlHOeoymG"
                className="mt-4"
                onChange={(value) => setIsVerified(value)}
              />
              <div className="mt-4">
                <div className="d-flex">
                  <button
                    type="submit"
                    className="rounded-0 border-0 p-1 btn btn-primary bg-gradient btn-md"
                  >
                    <div className="bg-white px-5 text-dark py-2">Send</div>
                  </button>
                  <div
                    className={`mb-0 ml-auto d-flex align-items-center small border-0 py-0 text-uppercase alert ${
                      isError ? "alert-danger" : "alert-success"
                    } hidden ${isSent ? "" : "hide"}`}
                  >
                    {isSent}
                  </div>
                </div>
              </div>
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
