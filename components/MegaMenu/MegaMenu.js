
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {SectorsNavData} from '../../src/utils/menu'
export default function MegaMenu() {
  return (
    <nav className="relative bg-white  border-gray-300 text-gray-900">
      <div className=" flex justify-between items-center">
        <div className="relative block  text-xl text-teal-600 font-bold">
        <Link href="/">
          <Image
            src={'/Platformable-logo.png'}
            className=""
            alt="Platformable"
            width={300}
            height={45}
            unoptimized
          />
        </Link>
        </div>
        <ul className="flex">
     

          <li className="toggleable ">
            <input
              type="checkbox"
              value="selected"
              id="toggle-one"
              className="toggle-input"
            />
            <label
              for="toggle-one"
              className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-[#2a2fc1]"
            >
              Products
            </label>
            <div
              role="toggle"
              className=" mega-menu mb-16 sm:mb-0 shadow-xl bg-white shadow-md border"
            >
              <div className=" w-full flex flex-wrap justify-between mx-2">
                <ul className="px-4 py-5 w-full sm:w-1/2 lg:w-1/4 border-[#2a2fc1] border-b sm:border-r lg:border-b-0 ">
                  <h3 className="font-bold text-xl text-[#2a2fc1] text-bold mb-2">
                    {SectorsNavData["Open Ecosystem"].title}
                  </h3>

                  {SectorsNavData["Open Ecosystem"].products.map((product,index)=>{
                    return (
                <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm"> {product?.title} </p>
                       <span className="text-xs">{product.description}</span>
                    </Link>
                  </li>
                    )
                  })}
                  
                </ul>
                <ul className="px-4 py-5 w-full sm:w-1/2 lg:w-1/4 border-[#2a2fc1] border-b sm:border-r-0 lg:border-r lg:border-b-0 ">
                <h3 className="font-bold text-xl text-[#2a2fc1] text-bold mb-2">
                    {SectorsNavData["Open Banking"].title}
                  </h3>
                
                {SectorsNavData["Open Banking"].products.map((product,index)=>{
                    return (
                <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm"> {product?.title} </p>
                       <span className="text-xs">{product.description}</span>
                    </Link>
                  </li>
                    )
                  })}
                </ul>
                <ul className="px-4 py-5 w-full sm:w-1/2 lg:w-1/4 border-[#2a2fc1] border-b sm:border-r-0 lg:border-r lg:border-b-0 ">
                <h3 className="font-bold text-xl text-[#2a2fc1] text-bold mb-2">
                    {SectorsNavData["Open Health"].title}
                  </h3>
                
                {SectorsNavData["Open Health"].products.map((product,index)=>{
                    return (
                <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                      <p className="font-bold text-sm"> {product?.title} </p>
                      <span className="text-xs">{product.description}</span>
                    </Link>
                  </li>
                    )
                  })}
                </ul>
                <ul className="px-4 py-5 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r-0 lg:border-b-0 ">
                <h3 className="font-bold text-xl text-[#2a2fc1] text-bold mb-2">
                    {SectorsNavData["Traceability"].title}
                  </h3>
                
                {SectorsNavData["Traceability"].products.map((product,index)=>{
                    return (
                <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                     <p className="font-bold text-sm"> {product?.title} </p>
                      <span className="text-xs">{product.description}</span>
                    </Link>
                    
                  </li>
                    )
                  })}
                </ul>
                {/* <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-xl text-white text-bold mb-2">
                    Endor
                  </h3>
                  <li class="pt-3">
                    <img src="https://placehold.it/205x172" />
                  </li>
                </ul> */}
              </div>
            </div>
          </li>
          {/* <!-- end Toggleable Link--> */}

          <li className="toggleable ">
            <input
              type="checkbox"
              value="selected"
              id="Resources"
              className="toggle-input"
            />
            <label
              for="Resources"
              className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-[#2a2fc1]"
            >
              Resources
            </label>
            <div
              role="toggle"
              className=" single-mega-menu mb-16 sm:mb-0 shadow-xl bg-white shadow-md border"
            >
              <div className=" w-full flex flex-wrap justify-between mx-2">
                <ul className="px-4 py-5 w-full ">
                  <h3 className="font-bold text-xl text-[#2a2fc1] text-bold mb-2">
                  Resources
                  </h3>

                 
                <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">Blog </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">Newsletter </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">Linkedin </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">Youtube </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>
                
                  
                </ul>
              

              </div>
            </div>
          </li>
          {/* <!-- end Toggleable Link--> */}

          <li className="toggleable ">
            <input
              type="checkbox"
              value="selected"
              id="Company"
              className="toggle-input"
            />
            <label
              for="Company"
              className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-[#2a2fc1]"
            >
              Company
            </label>
            <div
              role="toggle"
              className=" single-mega-menu mb-16 sm:mb-0 shadow-xl bg-white shadow-md border"
            >
              <div className=" w-full flex flex-wrap justify-between mx-2">
                <ul className="px-4 py-5 w-full ">
                  <h3 className="font-bold text-xl text-[#2a2fc1] text-bold mb-2">
                  Company
                  </h3>

                 
                <li>
                    <Link
                      href="/about"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">About </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact-us"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">Meet an expert </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>

                  <li>
                    <Link
                        href="/contact-us"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">Become a partner </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/contact-us"
                      className="block px-3 py-5 hover:bg-purple-100  hover:text-[#2a2fc1]"
                    >
                       <p className="font-bold text-sm">Contact us </p>
                       {/* <span className="text-xs">{product.description}</span> */}
                    </Link>
                  </li>
                
                  
                </ul>
              

              </div>
            </div>
          </li>
          {/* <!-- end Toggleable Link--> */}

          {/* //HOVER LINK */}
         {/*  <li class="hoverable hover:bg-purple-700 hover:text-white">
            <a
              href="#"
              class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-purple-700 hover:text-white"
            >
              Company
            </a>
            <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-purple-700">
              <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
                <div class="w-full text-white mb-8 text-center">
                  <h2 class="font-bold text-2xl">
                    Listen, why don’t you wait out by the speeder.
                  </h2>
                  <p>
                    our droids. They’ll have to wait outside. We don’t want them
                    here.
                  </p>
                </div>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Tatooine
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    Thul klivian doldur thisspiasian calrissian. Garindan d8
                    aurra twi'lek tund polis gen'dai sola tarpals.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-teal-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a
                      href="#"
                      class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                    >
                      Find out more...
                    </a>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Cantonica
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    Thul klivian doldur thisspiasian calrissian. Garindan d8
                    aurra twi'lek tund polis gen'dai sola tarpals.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-teal-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a
                      href="#"
                      class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                    >
                      Find out more...
                    </a>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Yavin 4
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    Thul klivian doldur thisspiasian calrissian. Garindan d8
                    aurra twi'lek tund polis gen'dai sola tarpals.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-teal-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a
                      href="#"
                      class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                    >
                      Find out more...
                    </a>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Alderaan
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    Thul klivian doldur thisspiasian calrissian. Garindan d8
                    aurra twi'lek tund polis gen'dai sola tarpals.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-teal-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a
                      href="#"
                      class="text-white bold border-b-2 border-teal-300 hover:text-teal-900"
                    >
                      Find out more...
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
