import React, { useEffect, useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './contact.css';

function Contact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  });

  return (
    <Fade in={open}>
      <Container className="contact">
        <h2 className="pt-3 text-center">Contact Me</h2>
        <p className="pb-3 fs-5 text-center">
          Think we would work well together? Let me know!
        </p>
        <Row className="pb-2">
          {/* Contact deatils */}
          <Column md="6" lg="5" className="ms-auto me-auto">
            <Row>
              <p className="fs-5">
                <i className="bi bi-geo-alt-fill ci"></i> Bristol, TN Area or
                Remote
              </p>
            </Row>
            <Row>
              <p>
                <a
                  href="mailto:ettahaselden@gmail.com"
                  title="Email Me"
                  target="_blank"
                  className="aci fs-5"
                >
                  <i className="bi bi-envelope-fill ci"></i> Send me an email
                  (ettahaselden@gmail.com)
                </a>
              </p>
            </Row>
            <Row>
              <p>
                <a href="tel:423-438-7569" title="Call Me" className="aci fs-5">
                  <i className="bi bi-telephone-fill ci"></i> Give me a call
                  (423-438-7569)
                </a>
              </p>
            </Row>
          </Column>
        </Row>
      </Container>
    </Fade>
  );
}

export default Contact;
