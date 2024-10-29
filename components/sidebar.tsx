"use client";

import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/product_logo.png";
import Icons from "../assets/icons.png";
import Icons2 from "../assets/icons2.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-gradient-to-b from-BASE_BLUEE to-BASE_BLUE h-screen w-64 fixed lg:relative top-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <Image src={Logo} alt="Logo" className="mx-auto pt-5 mt-10 md:mt-0" />
        <nav className="flex flex-col gap-8 p-10 my-5">
          <Link href="/transaction" className="flex items-center gap-8 text-white text-lg hover:bg-sky-700 hover:scale-105 p-2 rounded-lg">
            <Image src={Icons} alt="Transaction Icon" className="w-6 h-6" />
            Transaction
          </Link>
          <Link href="/products" className="flex items-center gap-8 text-white text-lg hover:bg-sky-700 hover:scale-105 p-2 rounded-lg">
            <Image src={Icons2} alt="Product Icon" className="w-6 h-6" />
            Product
          </Link>
        </nav>
      </div>

      <main className={`flex-1 transition-all duration-300 ${isOpen ? "ml-0" : "ml-0"} lg:ml-0 lg:translate-x-0`}>
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 rounded-full bg-blue-500 focus:outline-none mr-10" aria-label="Open Menu">
            <HiMenu className="text-2xl" />
          </button>
        </div>
      </main>

      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"></div>}
    </div>
  );
}
