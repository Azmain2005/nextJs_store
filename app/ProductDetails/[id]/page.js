"use client";
import Navbar from '@/app/components/Navbar';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { ImageZoom } from '@/components/ui/shadcn-io/image-zoom';
import Image from 'next/image';
import FeaturedProduct from '@/app/components/FeaturedProduct';
import Footer from '@/app/components/Footer';

export default function Page({ params }) {
    const id = params.id;

    async function fetchProduct() {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
    }

    const { data: product, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: fetchProduct,
    });

    if (isLoading) {
        return (
            <div className="container flex justify-center items-center p-10">
                <div className="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <p className="p-4 text-red-500">Error loading product</p>;
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Image Section */}
                    <div className="md:col-span-4 flex justify-center">
                        <div className="w-full max-w-xs">
                            <ImageZoom zoomMargin={10}>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={400}
                                    height={400}
                                    className="object-contain rounded-md w-full h-auto"
                                />
                            </ImageZoom>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="md:col-span-5 flex flex-col gap-3">
                        <h1 className="text-2xl font-semibold">{product.title}</h1>
                        <div className="flex items-center gap-2 text-yellow-500">
                            ⭐ {Math.round(product.rating.rate)} / 5
                            <span className="text-gray-600 text-sm">({product.rating.count} reviews)</span>
                        </div>
                        <p className="text-gray-700">{product.description}</p>
                        <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                            <li>Brand: Levi’s</li>
                            <li>Size: XL</li>
                            <li>Refund: Not applicable</li>
                            <li>100% authentic</li>
                        </ul>
                    </div>

                    {/* Price & Cart Section */}
                    <div className="md:col-span-3 flex flex-col gap-3 p-4 border rounded-lg shadow-sm">
                        <p className="text-2xl font-bold text-purple-600">${product.price}</p>
                        <p className="text-gray-500 line-through">${(product.price * 1.3).toFixed(2)}</p>
                        <p className="text-green-600 font-medium">In Stock</p>
                        <button className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                            Add to Cart
                        </button>
                        <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
                            Buy Now
                        </button>
                        <p className="text-xs text-gray-500">Secure transaction • Arrives in 3–5 days</p>
                    </div>
                </div>
            </div>

            <FeaturedProduct />
            <Footer />
        </>
    );
}
