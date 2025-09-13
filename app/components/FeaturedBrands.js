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

export default function FeaturedBrands() {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["featured-brands"],
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
    return <p className="p-4 text-red-500">Error loading featured brands</p>;
  }

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-9 sm:grid-rows-2">
        {/* Left div smaller */}
        <div className="sm:col-span-3 sm:row-span-2 bg-white rounded-lg p-4 mt-4 mb-4">
          <div className="p-4">
            <div className="flex justify-between">
              <p className="text-xl font-bold p-2">Featured Brands</p>
              <p className="hover:text-purple-600 font-bold cursor-pointer">
                see more
              </p>
            </div>
            <Carousel>
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="basis-1/3 max-sm:basis-2/4 max-md:basis-1/2"
                  >
                    <CategoryBrand
                      image={product.image}
                      title={product.title}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Right div larger */}
        <div className="sm:col-span-6 sm:row-span-2 sm:col-start-4 rounded-lg p-4">
          <div className="w-full aspect-[12/5] relative rounded-xl overflow-hidden shadow-md">
            <img
              src="https://cdn.ishop.cholobangla.com/uploads/banner-1.webp"
              alt="Banner 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://cdn.ishop.cholobangla.com/uploads/banner-5.webp"
          alt="Banner 5"
          className="object-cover w-full h-full p-2 rounded-2xl"
        />
      </div>
    </div>
  );
}
