import "../../App.css";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCartShopping,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavbarApp({ cartItemCount = 0 }) {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <span className="brand-text">React-Ecommerce</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/products"}>
              Products
            </Link>
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Link to={"/login"} className="btn btn-auth me-2">
              <FontAwesomeIcon icon={faArrowRightToBracket} className="me-2" />
              Login
            </Link>

            <Link to={"/register"} className="btn btn-auth me-3">
              <FontAwesomeIcon icon={faUserPlus} className="me-2" />
              Register
            </Link>

            <Link to={"/cart"} className="btn btn-cart position-relative">
              <FontAwesomeIcon icon={faCartShopping} className="me-2" />
              Cart
              {cartItemCount > 0 && (
                <Badge
                  pill
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
