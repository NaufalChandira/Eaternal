"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../../components/page";
import { TransactionPage } from "./chart";
import Image from "next/image";
import Buttons from "@/assets/Buttons.png";

export default function Transaction() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DATA_URL}/users`);
        if (!res.ok) throw new Error("Failed to fetch");

        const jsonData = await res.json();
        console.log("Fetched data:", jsonData);
        setData(jsonData.data || []); // Ensure data is an array
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCountTransactions = data.reduce((total, item) => total + (item.count_transactions || 0), 0); // Safely access count_transactions

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <h1 className="text-black text-3xl md:mt-5 mt-16 px-10 font-semibold">Transaction</h1>
        <div className="border rounded-none p-5 w-64 flex flex-col mx-10 mt-10">
          <p className="text-black text-lg font-semibold">Total Transaction</p>
          <p className="text-black text-2xl pt-7 font-semibold flex items-center gap-2">
            <Image src={Buttons} alt="Button Icon" className="w-8 h-8" />
            {totalCountTransactions}
          </p>
        </div>
        <div className="px-10 pt-5">
          <TransactionPage />
        </div>
      </div>
    </div>
  );
}
