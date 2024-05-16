import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { IoPerson, IoHeart, IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container navbar">
      <div className="logo">
        <Link href={"/"}>
          <Image src={logo} />
        </Link>{" "}
      </div>
      <div>
        <input type="text" placeholder="search..." />
      </div>
      <div className="icon">
        <Link href={"/contact"}>
          <IoPerson className="ico" />
        </Link>
        <p>Войти</p>
      </div>
      <div className="icon">
        <IoHeart className="ico" />
        <p>Избранное</p>
      </div>{" "}
      <div className="icon">
        <IoCartSharp className="ico" />
        <p>Корзина</p>
      </div>
    </div>
  );
};

export default Navbar;
