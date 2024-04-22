import React from "react";
import "./Cards.scss";
import Card from "react-bootstrap/Card";
import "./ProductCard.jsx";
import man from "./ProductImg/reshop.jpg";
function Product() {
  return (
    <div>
      <h1>Produktai</h1>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Title>Metalų koncentratas</Card.Title>
          <Card.Img variant="top" src={man} />
          <Card.Body></Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Title>Metalų koncentratas</Card.Title>
          <Card.Img variant="top" src={man} />
          <Card.Body></Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Title>Metalų koncentratas</Card.Title>
          <Card.Img variant="top" src={man} />
          <Card.Body></Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Title>Metalų koncentratas</Card.Title>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body></Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Title>Metalų koncentratas</Card.Title>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body></Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Product;
