import React from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import data from "../data/data";

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = data.find((prod) => prod.id === productId);

  return (
    <div className="max-width">
      <div className="grid-container">
        <div className="grid-item item-1">
          <img
            src={thisProduct.image}
            alt={thisProduct.name}
            className="grid-product__image"
          />
        </div>
        <div className="grid-item item-2">
          <p>{thisProduct.name}</p>
          <h4 className="product-type">{thisProduct.type}</h4>
          <h4 className="product-type">${thisProduct.price}</h4>
          <button
            type="button"
            className="js-qty__adjust js-qty__adjust--minus icon-fallback-text"
            data-id=""
            data-qty="0"
          >
            <i className="icon-minus" aria-hidden="true"></i>
            <span className="fallback-text">−</span>
          </button>
          <input
            type="text"
            className="js-qty__num"
            value="1"
            min="1"
            data-id=""
            aria-label="quantity"
            pattern="[0-9]*"
            name="quantity"
            id="Quantity"
            mm-min="1"
            mm-stock-max="NaN"
            max="2"
            mm-max="2"
            step="1"
            mm-step="1"
          ></input>
          <button
            type="button"
            className="js-qty__adjust js-qty__adjust--plus icon-fallback-text"
            data-id=""
            data-qty="11"
          >
            <i className="icon-plus" aria-hidden="true"></i>
            <span className="fallback-text">+</span>
          </button>
          <button type="submit" name="add" id="AddToCart" className="btn">
                          <span id="AddToCartText">Add to Bag</span>
                        </button>
          <p>{thisProduct.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
