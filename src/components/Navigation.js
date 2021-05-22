import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'

export default function Navigation() {
  return (
    <div>
      <Navbar className="link bg-dark text-light d-flex align-items-center justify-content-center flex-wrap">
        <Navbar.Brand className="mx-3 text-light">devwebdino.com </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="link text-light mx-2">Accueil</NavLink>
            <NavLink to="/portfolio" className="link text-light mx-3">Portfolio</NavLink>
            <NavLink to="/price" className="link text-light mx-3">Tarifs</NavLink>
            <Nav><a className="link text-light mx-3" href="http://agence-web.devwebdino.com/" target={"_blank"}>Blog</a></Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
