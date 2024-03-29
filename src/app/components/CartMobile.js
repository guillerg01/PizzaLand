"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartTop from "./CartTop";

const CartMobile = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  console.log(isOpen);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : ' -bottom-full '
       }  bg-white fixed w-full h-full left-0 z-40 transition-all duration-300 lg:hidden flex flex-col  `}
    >
      <CartTop ></CartTop>
      <div>cart items</div>
    </div>
  );
};

export default CartMobile;
