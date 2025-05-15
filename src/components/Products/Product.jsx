import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddedToCartMsg } from "../UsersMsg/AddedToCartMsg";
import { useCart } from "../../contexts/CartContext";

function Product(props) {
  let products = props.products;
  const { addToCart } = useCart() || {};

  const buttonStyle = {
    background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
    border: "none",
    padding: "8px 20px",
    fontWeight: "500",
    color: "white",
  };

  return (
    <Row className="justify-content-center">
      {products === undefined ? (
        <Spinner variant="dark" className="mt-5" />
      ) : (
        products.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12} className="p-3">
            <Card>
              <div className="d-flex justify-content-center p-2">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    width: "200px",
                    height: "250px",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">
                  {product.title.slice(0, 11)}...
                </Card.Title>
                <Card.Text>{product.description.slice(0, 60)}...</Card.Text>
                <hr />
                <Card.Text className="fs-5 text-center">
                  {product.price}$
                </Card.Text>
                <hr />
                <div className="d-flex justify-content-around">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn"
                    style={buttonStyle}
                  >
                    Buy Now
                  </Link>
                  <Button
                    style={buttonStyle}
                    onClick={() => {
                      addToCart && addToCart(product);
                      AddedToCartMsg();
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
}

export default Product;
