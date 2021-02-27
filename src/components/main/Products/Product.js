import React from "react";
import "./product.css";
const Product = ({ date, productName, size, website, price, status }) => {
  return (
    <ul className="product">
      <li>{date}</li>
      <li>{productName}</li>
      <li>{size}</li>
      <li>{website}</li>
      <li>{price}</li>
      <li>
        <button className="status">{status}</button>
      </li>
    </ul>
  );
};

export default Product;
