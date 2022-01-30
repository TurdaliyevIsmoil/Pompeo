import React from "react";

export default function Offer({title, img}) {
  return (
    <div className="offer flex-center">
      <img src={img} alt="Vases" />
      {title}
    </div>
  );
}
