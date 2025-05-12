import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AddedToCartMsg } from "../UsersMsg/AddedToCartMsg";
import { useCart } from "../../CartContext";

function ProductDetails() {
  const apiUrl = "https://fakestoreapi.com/products";
  const { productId } = useParams();
  let [product, setProduct] = useState([]);
    const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${apiUrl}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <Container>
      <Row className="my-5 align-items-center text-center">
        <Col lg={6} md={6} sm={12}>
          <div>
            <img
              className="img-fluid product-image"
              src={product.image}
              alt={product.title}
              style={{ width: "350px", height: "400px" }}
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h6 className="fs-5 text-black-50">
            {product.category !== undefined
              ? product.category.toUpperCase()
              : null}
          </h6>
          <h1 className="display-5">{product.title}</h1>
          <p className="fs-4">
            {product.rating !== undefined ? product.rating.rate : null}
            <FontAwesomeIcon className="ms-1" fontSize={22} icon={faStar} />
          </p>
          <p className="display-6">{product.price}$</p>
          <p className="text-black-50">{product.description}</p>
          <Button
            variant="dark"
            className="me-3"
            onClick={() => {
              addToCart(product);
              AddedToCartMsg();
            }}
          >
            Add to Cart
          </Button>
          <Link to={"/cart"} className="btn btn-dark">
            Go to Cart
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
