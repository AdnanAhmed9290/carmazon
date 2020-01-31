import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Navbar color="light" light expand="md" fixed="top">
        <Container>
          {/* <Row>
            <Col sm={6} xs={12}> */}
          <NavbarBrand href="/">CARMAZON</NavbarBrand>
          {/* </Col>
            <Col sm={6} xs={12} className="text-right"> */}
          <NavbarToggler onClick={() => setIsOpen(s => !s)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">LOGIN</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          {/* </Col>
          </Row> */}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
