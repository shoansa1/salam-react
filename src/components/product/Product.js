// Product.js
import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  const { name, description, price, imageUrl } = product;

  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
