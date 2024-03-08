'use client'
import {BsHandbagFill} from 'react-icons/bs'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const CartMobileIcon = () => {
  const {isOpen,setIsOpen}= useContext(CartContext)

  return <div onClick={()=>{setIsOpen(!isOpen)}} className='bg-tertiary w-[81px] h-[81px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10%] bottom-[5%] z-40'>
    <BsHandbagFill className='text-4xl'></BsHandbagFill>
    <span className='absolute text-white bottom-3 right-4 gradient w-5 h-5 flex justify-center items-center rounded-full font-robotoCondensed text-[13px]'>3</span>
  </div>;
};

export default CartMobileIcon;
