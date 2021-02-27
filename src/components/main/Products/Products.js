import React from "react";
import "./products.css";
import Product from "./Product";

const products = [];

const product = {
  date: "22 Feb 2021",
  productName: "Jordan 11 Retro Jubilee",
  size: "9.0",
  website: "Footlocker UK",
  price: "$211",
  status: "SUCESS",
};
for (let i = 0; i < 100; i++) {
  products.push(product);
}
const Products = () => {
  return (
    <section className="box-3">
      <header className="products-header">
        <ul>
          <li>Date</li>
          <li>Product</li>
          <li>Size (US)</li>
          <li>Website</li>
          <li>PRICE</li>
          <li>Status</li>
        </ul>
      </header>
      <div className="products">
        {products.map((product)=>{
            return <Product 
                date={product.date}
                productName={product.productName}
                size={product.size}
                website={product.website}
                price={product.price}
                status={product.status}
             />
        })}

      </div>
    </section>
  );
};

export default Products;
