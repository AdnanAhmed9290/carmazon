import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Banner = ({ title, subtitle, customClass }) => {
  return (
    <div className={`app-banner ${customClass}`}>
      <Container className="p-5">
        <Row>
          <Col>{title && <h2 className="title">{title}</h2>}</Col>
        </Row>
        <Row>
          <Col>{subtitle && <h5 className="subtitle ">{subtitle}</h5>}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
