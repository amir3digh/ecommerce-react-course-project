import Image from "next/image";
import { ProductStar } from "./Icons";

export default function ProductCard() {
  return (
    <div className="relative flex pb-4 gap-2 flex-col items-center max-w-[300px] border-[3px] border-[#F6F7F8]">
      <div className="relative w-[300px] h-[272px]">
        <Image src={"/product.jpg"} fill alt="product image" />
      </div>
      <div className="flex flex-col items-center gap-1 text-lg">
        <div className="font-bold text-[#223263]">Nike Air Max 270 React</div>
        <div className="flex gap-4">
          <ProductStar isActive />
          <ProductStar isActive />
          <ProductStar />
          <ProductStar />
          <ProductStar />
        </div>
        <div className="flex">
          <div className="text-[#40BFFF] font-bold">$299,43</div>
        </div>
      </div>
      <div className="absolute px-3 py-1.5 -left-[3px] -top-[3px] bg-[#FF4858] text-[#FFF]">
        <div>HOT</div>
      </div>
    </div>
  );
}
