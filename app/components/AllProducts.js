"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

// fetch function
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default function AllProducts() {
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(7);

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["all-products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (products.length > 0) {
      setIndex(products.length);
    }
  }, [products]); // ✅ only run when products change

  function increaseProduct() {
    setNumber((prev) => {
      const newNumber = prev + 3;
      return newNumber >= index ? index : newNumber;
    });
  }

  if (isLoading) {
    return (
      <div className="container flex justify-center items-center p-10">
        <div className="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <p className="p-4 text-red-500">Error loading products</p>;
  }

  return (
    <div className="container mx-auto p-2 sm:p-4 rounded-lg bg-white">
      <p className="text-lg sm:text-xl font-bold border-b-2 p-2">Daily discover</p>

      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {products.slice(0, number).map((product) => (
          <Link key={product.id} href={`/ProductDetails/${product.id}`}>
            <Card
              image={product.image}
              title={product.title}
              reviews={product.rating.count}
              rating={Math.round(product.rating.rate)}
              price={product.price}
            />
          </Link>
        ))}
      </div>

      {number < index && (
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={increaseProduct}
            className="bg-black text-white rounded-md hover:bg-purple-700 p-4 text-2xl transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
