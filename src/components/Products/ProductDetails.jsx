import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AddedToCartMsg } from "../UsersMsg/AddedToCartMsg";
import { useCart } from "../../CartContext";

function ProductDetails() {
  const apiUrl = "https://fakestoreapi.com/products";
  const { productId } = useParams();
  let [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Sample colors and sizes - you can modify these based on your needs
  const colors = ["Red", "Blue", "Black", "White", "Green"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    fetch(`${apiUrl}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size");
      return;
    }
    addToCart({ ...product, selectedColor, selectedSize });
    AddedToCartMsg();
  };

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
          
          {/* Color Selection */}
          <Form.Group className="mb-3">
            <Form.Label>Select Color</Form.Label>
            <div className="d-flex gap-2 justify-content-center">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "dark" : "outline-dark"}
                  onClick={() => setSelectedColor(color)}
                  style={{ minWidth: "80px" }}
                >
                  {color}
                </Button>
              ))}
            </div>
          </Form.Group>

          {/* Size Selection */}
          <Form.Group className="mb-3">
            <Form.Label>Select Size</Form.Label>
            <div className="d-flex gap-2 justify-content-center">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "dark" : "outline-dark"}
                  onClick={() => setSelectedSize(size)}
                  style={{ minWidth: "50px" }}
                >
                  {size}
                </Button>
              ))}
            </div>
          </Form.Group>

          <Button
            variant="dark"
            className="me-3"
            onClick={handleAddToCart}
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
