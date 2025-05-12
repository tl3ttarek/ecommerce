import { Col, Container, Row } from "react-bootstrap";
import homeImage from "../../logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} sm={12} className="col-text">
          <h2>
            Before They Sold Out <br /> Readymade Gluten.
          </h2>
          <p className="fs-6 text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            facere doloremque veritatis odit similique sequi.
          </p>
          <Link className="btn btn-dark my-3" to={"/products"}>
            Start Shopping
          </Link>
        </Col>
        <Col lg={6} sm={12} className="text-center">
          <img
            className="mt-3 img-fluid w-75"
            src={homeImage}
            alt="landingPageImage"
            style={{ borderRadius: "50%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
