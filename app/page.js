import Image from "next/image";
import Header from "./ui/components/Header";
import ProductCard from "./ui/components/ProductCard";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
