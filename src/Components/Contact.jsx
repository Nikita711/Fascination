import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME HERE</h1>
      <h2 className="contact-head">Don't be a Stranger</h2>
      <h2 className="sub-head">Let's meet here</h2>

      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:abhi9041355@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="abhi904135596@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/nikita-31b048196/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.facebook.com/Nikita711"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Say Hi on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/Nikita711"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="View my projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://twitter.com/Nikita711"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-info"
                  title="Tweets are most welcomed!"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
