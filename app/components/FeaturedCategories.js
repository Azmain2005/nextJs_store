"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryBrand from "./CategoryBrand";
import { useQuery } from "@tanstack/react-query";

// fetch function
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default function FeaturedCategories() {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["featured-categories"],
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
    return <p className="p-4 text-red-500">Error loading featured categories</p>;
  }

  return (
    <div className="container rounded-lg">
      <div className="flex justify-between">
        <p className="text-2xl font-bold p-2">Featured Category</p>
        <p className="hover:text-purple-600 font-bold">see more</p>
      </div>
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/9 max-sm:basis-2/4 max-md:basis-1/6"
            >
              <CategoryBrand image={product.image} title={product.title} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
