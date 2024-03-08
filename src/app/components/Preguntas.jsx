import Image from 'next/image'

import React from 'react'

export const Preguntas = () => {
  return (
    <div className="w-[40rem] text-black p-2 flex-col bg-gray-100 flex items-center  h-[50rem]">
    <div className="flex flex-col  items-center">
      <div >Cuestionario #1</div>
      <div > Pregunta #1</div>
    </div>

    <div>Los pasajeros estan obligados a:</div>
    <Image src={"/capricciosa.webp"} width={400} height={400} alt="" />
    <ul className="grid grid-cols-2 mt-5 gap-16">
    <li >
<label className="flex flex-row" htmlFor="myCheckbox">
<input
id="myCheckbox"
class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
type="checkbox"
/>
<div className="ml-2">asdsa</div>
</label>
</li>
<li >
<label className="flex flex-row" htmlFor="myCheckbox2">
<input
id="myCheckbox2"
class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
type="checkbox"
/>
<div className="ml-2">asdsa</div>
</label>
</li>
<li >
<label className="flex flex-row" htmlFor="myCheckbox3">
<input
id="myCheckbox3"
class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
type="checkbox"
/>
<div className="ml-2">asdsa</div>
</label>
</li>
<li >
<label className="flex flex-row" htmlFor="myCheckbox4">
<input
id="myCheckbox4"
class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
type="checkbox"
/>
<div className="ml-2">asdsa</div>
</label>
</li>
    </ul>
  </div>
  )
}
