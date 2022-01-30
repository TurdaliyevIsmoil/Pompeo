import React from "react";

export default function Product({data}) {
  return (
    <div className="product">
      <img src={data.img} alt="Image of product" />
      <div className="product-title">{data.title}</div>
      <div className="price">$ {data.price.toFixed(2)} USD</div>
    </div>
  );
}
