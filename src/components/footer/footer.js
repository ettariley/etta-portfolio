import React from 'react';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './footer.css';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="p-2 justify-content-center align-items-center">
        <Column xs="auto">
          <a
            href="mailto:ettahaselden@gmail.com"
            title="Email Me"
            target="_blank"
          >
            <i class="bi fi bi-envelope-fill h2"></i>
          </a>
        </Column>
        <Column xs="auto">
          <a href="tel:423-438-7569" title="Call Me">
            <i class="bi fi bi-telephone-fill h2"></i>
          </a>
        </Column>
        <Column xs="auto">
          <a
            href={require('../../assets/Etta_Haselden_Resume.pdf')}
            download
            title="My Resume"
            target="_blank"
          >
            <i className="bi bi-file-earmark-arrow-down-fill fi h2"></i>
          </a>
        </Column>
        <Column xs="auto">
          <a
            href="https://github.com/ettariley"
            title="My Github"
            target="_blank"
          >
            <i className="bi fi bi-github h2"></i>
          </a>
        </Column>
        <Column xs="auto">
          <a
            href="https://www.linkedin.com/in/ettariley/"
            title="My LinkedIn"
            target="_blank"
          >
            <i className="bi fi bi-linkedin h2"></i>
          </a>
        </Column>
      </Row>
      <Row>
        <p className="fs-6">Designed and developed by me!</p>
      </Row>
    </Container>
  );
}

export default Footer;
