"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useEffect, useState, useTransition } from "react";

export default function PriceRange({ minP, maxP }) {
  const [isPending, startTransition] = useTransition();
  const [minPrice, setMinPrice] = useState(minP);
  const [maxPrice, setMaxPrice] = useState(maxP);
  const [progressStyle, setProgressStyle] = useState({});
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    // Calculate the progress bar position and width
    const rangeWidth = maxP - minP; // dynamic range width
    const leftPosition = ((minPrice - minP) / rangeWidth) * 100;
    const rightPosition = ((maxPrice - minP) / rangeWidth) * 100;

    setProgressStyle({
      left: `${leftPosition}%`,
      width: `${rightPosition - leftPosition}%`,
    });
    startTransition(() => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (minP !== minPrice || maxP !== maxPrice) {
        newSearchParams.set("minP", minPrice);
        newSearchParams.set("maxP", maxPrice);
        startTransition(() => {
          router.push(pathName + `?${newSearchParams.toString()}`);
        });
      }
    });
  }, [minPrice, maxPrice]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="capitalize font-medium">Price Range:</p>
        <div className="flex items-center gap-0.5 text-sm">
          <span>${minPrice}</span>
          <span>-</span>
          <span>${maxPrice}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* <span className="text-sm">${minPrice.toFixed(2)}</span> */}
        <div className="relative w-full">
          {/* Base track */}
          {/* <div className="absolute w-full h-1 bg-gray-200 rounded-lg"></div> */}
          {/* Blue progress bar */}
          {/* <div
            className="absolute h-1 bg-[#2E90E5] rounded-lg"
            style={progressStyle}
          ></div> */}
          <input
            type="range"
            min={minP}
            max={maxP}
            step={0.5}
            // value={minPrice}
            onMouseUp={(e) => {
              const value = Number(e.target.value);
              if (value < maxPrice) setMinPrice(value);
            }}
            className="w-full cursor-pointer bg-transparent z-21"
          />
          <input
            type="range"
            min={minP}
            max={maxP}
            // value={maxPrice}
            onMouseUp={(e) => {
              const value = Number(e.target.value);
              if (value > minPrice) setMaxPrice(value);
            }}
            className="w-full cursor-pointer bg-transparent z-20"
          />
        </div>
        {/* <span className="text-sm">${maxPrice.toFixed(2)}</span> */}
      </div>
    </div>
  );
}
