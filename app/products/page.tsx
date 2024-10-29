"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../../components/page";
import Product from "./chart";
import Image from "next/image";
import Buttons2 from "@/assets/Buttons2.png";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DATA_URL}/brands`);
        if (!res.ok) throw new Error("Failed to fetch");

        const jsonData = await res.json();
        console.log("Fetched data:", jsonData);
        setData(jsonData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCountSold = data.reduce((total, item) => total + item.count_sold, 0);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <h1 className="text-black text-3xl md:mt-5 mt-16 px-10 font-semibold">Products</h1>
          <div className="border rounded-none p-5 w-64 flex flex-col mx-10 mt-10">
            <p className="text-black text-lg font-semibold">Total Item</p>
            <p className="text-black text-2xl pt-7 font-semibold flex items-center gap-2">
              <Image src={Buttons2} alt="Button Icon" className="w-8 h-8" />
              {totalCountSold}
            </p>
          </div>
          <div className="ps-10 pt-5">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}
