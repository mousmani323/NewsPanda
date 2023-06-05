import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";

const NavBar = (props) => {
  
    return (
      <div>
        <Navbar className="fixed-top" bg={props.mode} variant={props.mode} expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
            <img
              alt=""
              src={props.mode==='dark'?'../logoDark.png' : '../logo.png' }
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              News Panda</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "120px" }}
                navbarScroll
              >
                <Nav.Link href="/business">Business</Nav.Link>
                <Nav.Link href="/sports">Sports</Nav.Link>
                <Nav.Link href="/science">Science</Nav.Link>
                <Nav.Link href="/health">Health</Nav.Link>
                <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                <Nav.Link href="/technology">Technology</Nav.Link>
              </Nav>
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <Form.Check
                type="switch"
                id="custom-switch"
                label={props.mode==='light'?'Enable dark mode':'Enable light mode'}
                onClick={props.toggleMode}
              />
            </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
export default NavBar;