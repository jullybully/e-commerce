import React from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
import "../HomeContent.css";

const Products = () => {
  const products = data.map(product => {
    return (
      <section className="product-section">
      <div key={product.id} className="product-card">
      <Link to={`/products/${product.id}`}><img src={product.image} alt="card image" className="product-image"/></Link>
      <article className="product-content">
      <p className="product-name"><Link to={`/products/${product.id}`}>{product.name}</Link></p>
      <h4 className="product-type">{product.type}</h4>
      <h4 className="product-type">${product.price}</h4>
      </article>
      <button className="button-black">ADD TO BAG</button>
    </div>
    </section>
    );
  });

  return (
    <>
      <h1 className="text-gap">Product Page</h1>
      <div className="product-container">  
      {products}
      </div>
    </>
  );
};

export default Products;