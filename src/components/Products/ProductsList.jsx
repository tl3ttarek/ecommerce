import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Product from "./Product";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setActiveCategory("all");
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
      setActiveCategory(category);
    } catch (error) {
      console.error(`Error fetching ${category} products:`, error);
    }
  }

  // Button styling with hover effects
  const buttonStyle = (category) => ({
    background:
      activeCategory === category
        ? "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)"
        : "transparent",
    color: activeCategory === category ? "white" : "#2c3e50",
    border: "1px solid #2c3e50",
    padding: "8px 16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    ":hover": {
      background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
      color: "white",
      borderColor: "#2c3e50",
    },
  });

  return (
    <Container>
      <h1 className="text-center mt-3">Latest Products</h1>
      <hr />
      <div className="d-flex justify-content-center gap-3 my-4 filter-btn flex-wrap">
        <Button
          style={buttonStyle("all")}
          onClick={getAll}
          className="category-btn"
        >
          All
        </Button>
        <Button
          style={buttonStyle("men's clothing")}
          onClick={() => getCategory("men's clothing")}
          className="category-btn"
        >
          Men's Clothing
        </Button>
        <Button
          style={buttonStyle("women's clothing")}
          onClick={() => getCategory("women's clothing")}
          className="category-btn"
        >
          Women's Clothing
        </Button>
        <Button
          style={buttonStyle("jewelery")}
          onClick={() => getCategory("jewelery")}
          className="category-btn"
        >
          Jewelery
        </Button>
        <Button
          style={buttonStyle("electronics")}
          onClick={() => getCategory("electronics")}
          className="category-btn"
        >
          Electronics
        </Button>
      </div>
      <Product products={products} />
    </Container>
  );
}

export default ProductsList;
