import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import {
  fetchAllProducts,
  fetchElectroProducts,
  fetchJeweleryProducts,
  fetchMensProducts,
  fetchWomensProducts,
} from "../../store/slices/products-slice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";

function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispacth = useDispatch();

  useEffect(getAll, [dispacth]);

  function getAll() {
    dispacth(fetchAllProducts());
  }
  function getMens() {
    dispacth(fetchMensProducts("men's clothing"));
  }
  function getWomens() {
    dispacth(fetchWomensProducts("women's clothing"));
  }
  function getJewelery() {
    dispacth(fetchJeweleryProducts("jewelery"));
  }
  function getElectro() {
    dispacth(fetchElectroProducts("electronics"));
  }

  return (
    <Container>
      <h1 className="text-center mt-3">Latest Products</h1>
      <hr />
      <div className="d-flex justify-content-center gap-3 my-4 filter-btn">
        <Button variant="outline-dark" onClick={getAll}>
          All
        </Button>
        <Button variant="outline-dark" onClick={getMens}>
          Men's Clothing
        </Button>
        <Button variant="outline-dark" onClick={getWomens}>
          Women's Clothing
        </Button>
        <Button variant="outline-dark" onClick={getJewelery}>
          Jewelery
        </Button>
        <Button variant="outline-dark" onClick={getElectro}>
          Electronics
        </Button>
      </div>
      <Product products={products} />
    </Container>
  );
}

export default ProductsList; 