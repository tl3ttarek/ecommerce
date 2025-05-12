import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Product from "./Product";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function getCategory(category) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(`Error fetching ${category} products:`, error);
    }
  }

  return (
    <Container>
      <h1 className="text-center mt-3">Latest Products</h1>
      <hr />
      <div className="d-flex justify-content-center gap-3 my-4 filter-btn">
        <Button variant="outline-dark" onClick={getAll}>
          All
        </Button>
        <Button variant="outline-dark" onClick={() => getCategory("men's clothing")}>
          Men's Clothing
        </Button>
        <Button variant="outline-dark" onClick={() => getCategory("women's clothing")}>
          Women's Clothing
        </Button>
        <Button variant="outline-dark" onClick={() => getCategory("jewelery")}>
          Jewelery
        </Button>
        <Button variant="outline-dark" onClick={() => getCategory("electronics")}>
          Electronics
        </Button>
      </div>
      <Product products={products} />
    </Container>
  );
}

export default ProductsList;
