import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { Banner, InputField, SelectField } from '../../Components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const RegisterFormSchema = Yup.object().shape({
  first_name: Yup.string()
    .max(30)
    .required('Required'),
  last_name: Yup.string()
    .max(30)
    .required('Required'),
  city: Yup.string()
    .max(30)
    .required('Required'),
  phone_number: Yup.string()
    .required('Required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string()
    .required('Required')
    .min(8, 'at least 8 chars')
    .matches(/[a-z]/, 'at least one lowercase char')
    .matches(/[A-Z]/, 'at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),
  confirm_password: Yup.mixed()
    .test('verify-passwords', "Password doesn't match", function(value) {
      return this.parent.password === value;
    })
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const ProviceOptions = ['Alaska', 'California', 'Newyork', 'Florida'];

const Register = () => {
  const handleRegister = fValues => {
    console.log('Register Form Values: ', fValues);
  };

  return (
    <div className="register-page">
      <Banner title="Create a New Account" />
      <Formik
        validationSchema={RegisterFormSchema}
        onSubmit={handleRegister}
        initialValues={{ province: ProviceOptions[0] }}>
        {fProps => {
          return (
            <Form className="mt-5">
              <Container className="register-form">
                <Row>
                  <Col xs={12} sm={6} className="text-left">
                    <InputField
                      name="first_name"
                      label="First Name"
                      placeholder="Enter first name..."
                    />
                  </Col>
                  <Col xs={12} sm={6} className="text-left">
                    <InputField
                      name="last_name"
                      label="Last Name"
                      placeholder="Enter Last name..."
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6} className="text-left">
                    <InputField type="password" label="Password" name="password" />
                  </Col>
                  <Col xs={12} sm={6} className="text-left">
                    <InputField type="password" label="Confirm Password" name="confirm_password" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6} className="text-left">
                    <InputField
                      name="phone_number"
                      type="number"
                      label="Phone #"
                      placeholder="(111) 222 2222"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="text-left">
                    <InputField name="email" label="Email" placeholder="Enter email..." />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6} className="text-left">
                    <InputField name="city" label="City" placeholder="Enter your City Name..." />
                  </Col>
                  <Col xs={12} sm={6} className="text-left">
                    <SelectField name="province" label="Province" options={ProviceOptions} />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Button color="primary" type="submit" size="lg" block>
                      Register
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
