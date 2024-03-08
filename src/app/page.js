'use client'// import components
import Pizza from "./components/Pizza";
import Banner from "./components/Banner";
import Image from "next/image";
import { useState } from "react";

const pizzas = [
  {
    id: 1,
    name: "capricciosa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/capricciosa.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: "cheesy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/cheesy.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: "hawaii",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/hawaii.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: "italian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/italian.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: "margherita",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/margherita.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: "pepperoni",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/pepperoni.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: "quattro formaggi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/quattro-formaggi.webp",
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: "quattro stagioni",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/quattro-stagioni.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: "tonno",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/tonno.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: "vegetarian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.",
    image: "/vegetarian.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
];

export default function Home() {

  const[step,setStep]= useState(1)
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xd:gap-[30px] py-12">
          {pizzas.map((pizza,i)=>{return <Pizza key={i} pizza={pizza}></Pizza>})}

          {/* <div className="w-[40rem] text-black p-2 flex-col bg-gray-100 flex items-center  h-[50rem]">
         
            <div className={` w-full max-w-[93%] ml-4 mr-10`}>
                <div className="relative">
                    <div className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700"
                         aria-hidden="true"></div>
                    <ul className="relative flex justify-between w-full">
                        <li>
                        <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${step > 1 ? ( ' bg-secondary text-white') : step === 1 ? ( 'bg-amber-500 text-white') : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>1
                            </div>
                        </li>
                        <li>
                            <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${step > 2 ? ( ' bg-secondary text-white') : step === 2 ? ( 'bg-amber-500 text-white') : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>2
                            </div>
                        </li>
                        <li>
                            <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${step > 3 ? ( ' bg-secondary text-white') : step === 3 ? ('bg-amber-500 text-white') : 'bg-slate-100  dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>3
                            </div>
                        </li>
                        <li>
                            <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${step > 4 ? ( ' bg-secondary text-white') : step === 4 ? ( 'bg-amber-500 text-white') : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>4
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>
      
  
          </div> */}

        </div>
      </div>
    </section>
  );
}
