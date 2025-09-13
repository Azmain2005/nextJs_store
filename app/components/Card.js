// app/components/Card.js
import Image from "next/image";
import { Star } from "lucide-react";

export default function Card({ image, title, reviews, rating, price }) {
  return (
    <div className="flex flex-col justify-between h-full max-w-xs rounded-2xl   p-4 bg-white hover:shadow-lg transition">
      {/* Product Image */}
      <div className="h-[220px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain max-h-[200px]"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-grow mt-4">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
          {title}
        </h3>

        {/* Reviews */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">{reviews} Reviews</span>
        </div>

        {/* Price */}
        <p className="mt-3 text-lg font-bold text-gray-900">${price}</p>
      </div>
    </div>
  );
}
