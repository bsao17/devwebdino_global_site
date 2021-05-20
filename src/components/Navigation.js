import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default function Navigation() {
  return (
    <div>
      <Navbar className="bg-dark text-light d-flex align-items-center justify-content-center flex-wrap">
        <Navbar.Brand href="/" className="mx-3 text-light">devwebdino.com </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-light">Accueil</Nav.Link>
            <Nav.Link href="/portfolio" className="text-light">Portfolio</Nav.Link>
            <Nav.Link href="/price" className="text-light">Tarifs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
