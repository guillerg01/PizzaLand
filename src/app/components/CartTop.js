'use client'
import { useContext } from "react";
import {IoCloseOutline} from 'react-icons/io5'
import { CartContext } from "../context/CartContext";

const CartTop = () => {
  const {isOpen,setIsOpen} =useContext(CartContext)
  return <div className="w-full h-20 border-b flex items-center justify-between px-1 ">
    <div className="font-semibold">Shopping Bag (3)</div>
    <div onClick={()=>setIsOpen(false)} className="cursor-pointer">
      <IoCloseOutline  className="text-3xl group-hover:scale-110 transition-all duration-300 "></IoCloseOutline>
    </div>
  </div>;
};

export default CartTop;
