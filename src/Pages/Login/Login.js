import React from 'react';
import { Container, Col, Row, Button, NavLink } from 'reactstrap';
import { Form, Formik } from 'formik';
import { Banner, InputField } from '../../Components';
import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const Login = () => {
  const handleLogin = fValues => {
    console.log('Login Form Values: ', fValues);
  };

  return (
    <div className="login-page">
      <Banner title="Login to your account" />
      <Container>
        <Formik validationSchema={LoginFormSchema} onSubmit={handleLogin} initialValues={{}}>
          {({ values }) => (
            <Form data-testid="form">
              <div className="login-form mt-5">
                <Row>
                  <Col className="text-left">
                    <InputField name="email" label="Email" placeholder="Enter email..." />
                    <InputField type="password" label="Password" name="password" />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Button color="primary" type="submit" block>
                      Login
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NavLink href="/register">Register Now</NavLink>
                  </Col>
                </Row>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;
