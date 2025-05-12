import "../../App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCartShopping,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-4" sticky="top">
      <Container>
        <Link to={"/"} className="fw-bold fs-4 navbar-brand">
          React-Ecommerce
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/products"}>
              Products
            </Link>
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
            <Link className="nav-link" to={"/contact"}>
              Contact
            </Link>
          </Nav>

          <Link to={"/login"} className="btn btn-outline-dark me-2">
            <FontAwesomeIcon icon={faArrowRightToBracket} className="me-1" />
            Login
          </Link>

          <Link to={"/register"} className="btn btn-outline-dark me-2">
            <FontAwesomeIcon icon={faUserPlus} className="me-1" />
            Register
          </Link>

          <Link to={"/cart"} className="btn btn-outline-dark btn-cart">
            <FontAwesomeIcon icon={faCartShopping} className="me-1" />
            Cart
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
