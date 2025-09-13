"use client";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

// fetch function
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default function FeaturedProduct() {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["FeaturedProduct"],
    queryFn: fetchProducts,
  });

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
    <div className="container bg-white rounded-lg m-4">
      <div className="flex justify-between border-b-2">
        <p className="text-2xl font-bold m-1">Featured product</p>
        <p className="hover:text-purple-600 cursor-pointer">see more</p>
      </div>
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/7 max-sm:basis-3/4 max-md:basis-1/4"
            >
              <Link href={`/ProductDetails/${product.id}`}>
                <Card
                  image={product.image}
                  title={product.title}
                  reviews={product.rating.count}
                  rating={Math.round(product.rating.rate)}
                  price={product.price}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
