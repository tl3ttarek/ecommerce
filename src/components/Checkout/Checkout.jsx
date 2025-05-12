import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CheckoutBody from "./CheckoutBody";

function Checkout() {
  const cart = [];

  return (
    <Container className="mb-3">
      {cart.length === 0 ? (
        <>
          <div className="text-center mt-3">
            <h1>Checkout</h1>
            <hr />
            <div className="p-5" style={{ backgroundColor: "#f6f6f6" }}>
              <h2 className="display-5 mt-2">No Items In Cart</h2>
              <Link to={"/products"} className="btn btn-outline-dark mt-4">
                <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
              </Link>
            </div>
          </div>
        </>
      ) : (
        <CheckoutBody />
      )}
    </Container>
  );
}

export default Checkout;
