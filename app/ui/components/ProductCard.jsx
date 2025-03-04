import Image from "next/image";
import { ProductStar } from "./Icons";
import { useMemo } from "react";

export default function ProductCard({ product }) {
  const [rating, maxRating] = useMemo(() => {
    const maxRating = 5;
    return [Math.ceil(product.rating.rate), maxRating];
  }, [product]);
  return (
    <div className="relative flex pb-4 gap-2 flex-col items-center max-w-[300px] border-[3px] border-[#F6F7F8]">
      <div className="relative w-[300px] h-[272px]">
        <Image className="object-contain  py-4 px-8" src={product.image} fill alt="product image" />
      </div>
      <div className="flex flex-col items-center gap-1 text-lg">
        <div className="font-bold text-[#223263] text-center">{product.title}</div>
        <div className="flex gap-4">
          {Array.from({ length: rating }, (_, index) => (
            <ProductStar key={index} isActive />
          ))}
          {Array.from({ length: maxRating - rating }, (_, index) => (
            <ProductStar key={index + rating}/>
          ))}
        </div>
        <div className="flex">
          <div className="text-[#40BFFF] font-bold">${product.price}</div>
        </div>
      </div>
      <div className="absolute px-3 py-1.5 -left-[3px] -top-[3px] bg-[#FF4858] text-[#FFF]">
        <div>HOT</div>
      </div>
    </div>
  );
}
