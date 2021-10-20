import { mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { H2 } from "./Home";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ({ isSmall }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    contact: "",
  });

  const [isSent, setIsSent] = useState('');
  const [isVerified, setIsVerified] = useState(null);
  const [isError, setIsError] = useState(false);

  const submitMessage = (event) => {
    event.preventDefault();
    if (isVerified) {
      let name = state.name;
      let email = state.email;
      let message = state.message;
      let contact = state.contact;
      var formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSclvNomLE2jNLcCUj_A4daUDhrPws8U6kR9RENJoHRS_OZtMg/viewform?usp=pp_url&entry.1832782791=${name}&entry.862181333=${email}&entry.662822698=${contact}&entry.429037016=${message}`;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", formUrl);
      xmlHttp.send(null);
      setIsSent("Message Sent!");
      setIsError(false);
      setState({
        name: "",
        email: "",
        message: "",
        contact: "",
      });
    } else {
      setIsError(true);
      setIsSent("Verify Captcha!");
    }
  };

  const handleChange = (event) => {
    setIsSent('');

    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  const contactArray = [
    {
      icon: mdiMapMarker,
      title: "Pristine Group",
      text: "303, Ashok Bhawan - 93, Nehru Place, <br/> New Delhi - 110019",
      href: "https://goo.gl/maps/dVosGt7vb6haAF518",
    },
    {
      icon: mdiPhone,
      title: "+91-7701919922",
      text: "Mon to Fri - 11AM to 5PM",
      href: "tel:+917701919922",
    },
    {
      icon: mdiEmail,
      title: "care@grouppristine.com",
      text: "Send us an email anytime!",
      href: "mailto:care@grouppristine.com",
    },
  ];
  return (
    <>
      <div className="container-fluid my-5">
        <H2 className="text-gradient text-center d-block d-lg-none text-lg-right text-uppercase font-weight-bold">
          <span>Contact</span>
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
              Contact Us
            </h5>
          </div>
          <div className="d-flex justify-content-center flex-column order-3 order-lg-2 col-sm-12 col-lg-9 pt-4 pt-lg-0">
            <iframe
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              height="500px"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Pristine Group"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.713467154677!2d77.25031531508074!3d28.548330982451084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c564455555%3A0x432a1f11c4c8f62c!2sPristine%20Group!5e0!3m2!1sen!2sin!4v1632153308490!5m2!1sen!2sin"
            ></iframe>
            <h2 className="text-primary font-weight-bold mb-4 mt-3 mt-lg-5">
              Get in Touch With Us
            </h2>
            <div className="row">
              <div className="col-12 col-lg-8">
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
                      Please enter your full name.
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
                      We'll get back to you on this email.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      aria-describedby="contactHelp"
                      placeholder="Contact Number"
                      onChange={handleChange}
                      value={state.contact}
                      name="contact"
                    />
                    <small id="contactHelp" className="form-text text-muted">
                      We'll get back to you on this number for follow up.
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message<span className="text-danger">*</span>
                    </label>

                    <textarea
                      rows="6"
                      className="form-control"
                      id="message"
                      aria-describedby="messageHelp"
                      placeholder="Message"
                      value={state.message}
                      name="message"
                      onChange={handleChange}
                      required
                    />
                    <small id="messageHelp" className="form-text text-muted">
                      Please enter your message or query.
                    </small>
                  </div>

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
              <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                {contactArray.map((data, i) => {
                  return (
                    <div className="media" key={i}>
                      <span>
                        <Icon path={data.icon} color="#049cf4" size={1} />
                      </span>
                      <div className="media-body ml-2">
                        <a
                          href={data.href}
                          className="mb-0 h5 text-primary font-weight-light"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {data.title}
                        </a>
                        <p
                          className="mb-4 text-secondary pr-5"
                          dangerouslySetInnerHTML={{ __html: data.text }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
