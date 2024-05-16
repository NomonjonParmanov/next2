import React from "react";
import { ICONS } from "@/static";
import Image from "next/image";
import header from "@/assets/header.png";
const Header = () => {
  let card = ICONS?.map((el) => (
    <div key={el.id} className="card">
      <Image src={el.img} />
      <p>{el.title}</p>
    </div>
  ));

  return (
    <div className="container header">
      <div className="left">
        <div className="cate">: Популярные категории</div>
        <div className="cards">{card}</div>
      </div>
      <div className="right">
        <Image src={header} />
      </div>
    </div>
  );
};

export default Header;
