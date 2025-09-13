import React from "react";
import Image from "next/image";

export default function BannerAd() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Banner 1 */}
        <div className="w-full aspect-[12/5] relative rounded-xl overflow-hidden shadow-md">
          <img
            src="https://cdn.ishop.cholobangla.com/uploads/banner-2.webp" // put your image in /public
            alt="Banner 1"
            className="object-cover"
          />
        </div>

        {/* Banner 2 */}
        <div className="w-full aspect-[12/5] relative rounded-xl overflow-hidden shadow-md">
          <img
            src="https://cdn.ishop.cholobangla.com/uploads/banner-3.webp"
            alt="Banner 2"
            className="object-cover"
          />
        </div>

        {/* Banner 3 */}
        <div className="w-full aspect-[12/5] relative rounded-xl overflow-hidden shadow-md">
          <img
            src="https://cdn.ishop.cholobangla.com/uploads/banner-4.webp"
            alt="Banner 3"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
