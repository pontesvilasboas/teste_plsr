import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pontesports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Loja</Nav.Link>
            <Nav.Link href="#link">PontesCard</Nav.Link>
            <NavDropdown title="Junte-se a nos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Trabalhe conosco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lojas parceiras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vire uma revenda</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Pesquisar</Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;