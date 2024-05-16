"use client";
import Image from "next/image";
import React from "react";

const ProductsWrapper = ({ data }) => {
  let productItems = data?.products?.map((el) => (
    <div className="card" key={el.id}>
      <Image src={el.images[0]} alt={el.title} width={200} height={200} />
      <h3>
        ${el.price} <span>$50</span>
      </h3>
      <p>{el.title}</p>
    </div>
  ));
  return (
    <div className="container products">
      <h2>Успей купить</h2>
      <div className="cards">{productItems}</div>
    </div>
  );
};

export default ProductsWrapper;
