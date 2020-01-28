import React from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, NavLink } from 'reactstrap';
import { Banner } from '../../Components';

const Login = () => {
  return (
    <div className="login-page">
      <Banner title="Login to your account" />
      <Container>
        <Form className="login-form mt-5">
          <Row>
            <Col className="text-left">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter email..." />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Button color="primary" block>
                Login
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <NavLink href="/register">Register Now</NavLink>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
