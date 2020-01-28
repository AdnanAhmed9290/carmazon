import React, { useState } from 'react';
import classnames from 'classnames';
import {
  Col,
  Row,
  Input,
  Button,
  Jumbotron,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';

const CarDetails = ({ carInfo = {} }) => {
  const [activeTab, setActiveTab] = useState('1');

  const { title = '', model, imgUrl } = carInfo;

  return (
    <div className="car-details" className="text-left mt-4">
      <Container>
        <Row className="align-items-center">
          <Col md={2} sm={5} className="pl-3 pl-md-0 mb-3 mb-md-0">
            <img src={imgUrl} className="img-fluid rounded" />
          </Col>
          <Col md={10} sm={7} className="pr-3 pr-md-0">
            <Row>
              <Col>
                <h3>{title}</h3>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Input type="select" name="year" id="year">
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                </Input>
              </Col>
              <Col md={6} className="text-sm-right">
                <Button className="mt-3 mt-md-0" block>
                  Customization Options
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="align-items-center text-center text-md-left my-4">
          <Col sm={12} md={4}>
            <Row className="align-items-center">
              <Col sm={12} md={10} className="p-3 p-md-0">
                <Jumbotron className="m-0">
                  <h5 className="display-5">Full Price / MSRP</h5>
                  <h5 className="display-5">$30,000</h5>
                </Jumbotron>
              </Col>
              <Col sm={12} md={2} className="p-0 p-md-0 text-center">
                <h4 className="m-0">-</h4>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4}>
            <Row className="align-items-center">
              <Col sm={12} md={10} className="p-3 p-md-0">
                <Jumbotron className="m-0">
                  <h5 className="display-5">Amount Paid</h5>
                  <h5 className="display-5">$5,000</h5>
                </Jumbotron>
              </Col>
              <Col sm={12} md={2} className="p-0 text-center">
                <h4 className="m-0">=</h4>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4}>
            <Row className="align-items-center">
              <Col sm={12} md={8} className="p-3 p-md-0">
                <Jumbotron className="m-0">
                  <h5 className="display-5">Balance Amount</h5>
                  <h5 className="display-5">$30,000</h5>
                </Jumbotron>
              </Col>
              <Col sm={12} md={4} className="p-3 p-md-0 text-center">
                <Button className="px-4">Pay</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="car-specs p-3 p-md-0">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => setActiveTab('1')}>
                  General Specs
                </NavLink>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => setActiveTab('2')}>
                  Cash Incentives
                </NavLink>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => setActiveTab('3')}>
                  Financial Incentives
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Container>
                  <Row className="spec-row">
                    <Col sm="6" className="item">
                      <span className="label">Engine</span>
                      <span className="value">3,000L</span>
                    </Col>
                    <Col sm="6" className="item">
                      <span className="label">Horsepower @RPH</span>
                      <span className="value">385</span>
                    </Col>
                  </Row>
                  <Row className="spec-row">
                    <Col sm="6" className="item">
                      <span className="label">Engine</span>
                      <span className="value">3,000L</span>
                    </Col>
                    <Col sm="6" className="item">
                      <span className="label">Horsepower @RPH</span>
                      <span className="value">385</span>
                    </Col>
                  </Row>
                  <Row className="spec-row">
                    <Col sm="6" className="item">
                      <span className="label">Engine</span>
                      <span className="value">3,000L</span>
                    </Col>
                    <Col sm="6" className="item">
                      <span className="label">Horsepower @RPH</span>
                      <span className="value">385</span>
                    </Col>
                  </Row>
                  <Row className="spec-row">
                    <Col sm="6" className="item">
                      <span className="label">Engine</span>
                      <span className="value">3,000L</span>
                    </Col>
                    <Col sm="6" className="item">
                      <span className="label">Horsepower @RPH</span>
                      <span className="value">385</span>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <h4>Cash Incentives</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <h4>Financial Incentive</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarDetails;
