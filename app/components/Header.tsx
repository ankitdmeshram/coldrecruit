import { Link } from "@remix-run/react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"../"}>Cold Recruit</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link>
              <Link to={"../"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/jobs"}>Jobs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/internship"}>Internship</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
