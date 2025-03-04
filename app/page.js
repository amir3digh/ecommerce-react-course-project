"use client";
import Image from "next/image";
import Header from "./ui/components/Header";
import ProductCard from "./ui/components/ProductCard";
import Sidebar from "./ui/components/sidebar/Sidebar";
import Paging from "./ui/components/Paging";
import useProducts from "./ui/hooks/useProducts";
import SkletonLoading from "./ui/components/SkletonLoading";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [products, getProducts, loading] = useProducts();
  const searchParams = useSearchParams();
  useEffect(() => {
    getProducts(searchParams);
  }, [searchParams]);
  return (
    <div className="w-full h-screen flex flex-col gap-10">
      <Header />
      <div className="px-24 flex justify-between gap-6">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 flex flex-col gap-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
            {loading
              ? Array.from({ length: 6 }, (_, index) => (
                  <SkletonLoading key={index} />
                ))
              : products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
          </div>
          <div className="flex items-center justify-center">
            <Paging totalPages={5} />
          </div>
        </div>
      </div>
    </div>
  );
}
