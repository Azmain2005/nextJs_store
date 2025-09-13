// app/components/Card.js
import Image from "next/image";
import { Star } from "lucide-react";

export default function CategoryBrand({ image, title}) {
  return (
    <div className="flex flex-col justify-between h-full max-w-xs rounded-2xl bg-white hover:shadow-lg transition">
      <div className="h-[200px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="object-contain max-h-[200px]"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-grow ">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px] p-2">
          {title}
        </h3>

      </div>
    </div>
  );
}
