import {
  faArrowLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { useCart } from "../../CartContext";

export let totalAmount;

function Cart() {
  const { cart } = useCart();

  totalAmount = cart.reduce((curr, acc) => {
    curr += acc.price * acc.quantity;
    return curr;
  }, 0);

  return (
    <Container>
      <h1 className="text-center mt-3">Cart</h1>
      <hr />
      {cart.length === 0 ? (
        <div className="text-center mt-3">
          <div className="p-5" style={{ backgroundColor: "#f6f6f6" }}>
            <h2 className="display-5 mt-2">Your Cart is Empty</h2>
            <Link to={"/products"} className="btn btn-outline-dark mt-4">
              <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <Row>
          <Col lg={8} md={6} sm={6}>
            {cart.map((product) => (
              <Card key={product.id} className="my-5">
                <Row className="align-items-center">
                  <Col>
                    <div className="d-flex justify-content-center p-2">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{
                          width: "120px",
                          height: "150px",
                        }}
                      />
                    </div>
                  </Col>
                  <Col>
                    <Card.Title className="text-center">
                      {product.title}
                    </Card.Title>
                  </Col>
                  <Col>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <Button variant="outline-dark">
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                      <div className="d-flex flex-column align-items-center ">
                        <p className="fs-4 fw-bold" style={{ margin: "0" }}>
                          {product.quantity}
                        </p>
                        <p className="fw-bold">
                          {product.quantity} X {product.price}$
                        </p>
                      </div>
                      <Button variant="outline-dark">
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-3">
            <OrderSummary inCartPage={true} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
