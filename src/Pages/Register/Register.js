import React from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Banner } from '../../Components';

const Register = () => {
  return (
    <div className="register-page">
      <Banner title="Create a New Account" />
      <Form className="mt-5">
        <Container className="register-form">
          <Row>
            <Col xs={12} sm={6} className="text-left">
              <FormGroup>
                <Label for="first-name">First Name</Label>
                <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Enter first name..."
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={6} className="text-left">
              <FormGroup>
                <Label for="last-name">Last Name</Label>
                <Input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Enter Last name..."
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="text-left">
              <FormGroup>
                <Label for="phone-number">Phone #</Label>
                <Input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  placeholder="(111) 222 2222"
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={6} className="text-left">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter Email..." />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="text-left">
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" placeholder="Enter your City Name..." />
              </FormGroup>
            </Col>
            <Col xs={12} sm={6} className="text-left">
              <FormGroup>
                <Label for="province">Province</Label>
                <Input type="select" name="select" id="province">
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Newyork</option>
                  <option>Florida</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Button color="primary" size="lg" block>
                Register
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default Register;
