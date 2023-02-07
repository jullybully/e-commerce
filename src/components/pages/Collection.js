import React from 'react';
import data from "../data/data";
import { Link } from "react-router-dom";

export default function Collection() {
  const products = data.map(product => {
    if (product.type === "TV cabinet" || product.type === "Sofas") {
      return (
        <section className="product-section">
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt="card image" className="product-image"/>
            </Link>
            <article className="product-content">
              <p className="product-name">
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </p>
              <h4 className="product-type">{product.type}</h4>
              <h4 className="product-price">${product.price}</h4>
            </article>
            <button className="button-black">ADD TO BAG</button>
          </div>
        </section>
      );
    }
  });

  return (
    <>
      <h1 className="text-gap">Collection</h1>
      <div className="product-container">  
      {products}
      </div>
    </>
  );
};
