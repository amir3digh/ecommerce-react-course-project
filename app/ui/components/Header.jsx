import { CartIcon, SearchIcon } from "./Icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-screen px-24  flex flex-col justify-between">
      <div className="flex flex-1 pt-8 pb-4">
        <div className="flex justify-end items-center flex-1 gap-4">
          <CartIcon />
          <form className="flex items-center border rounded-lg p-2">
            <input type="text" placeholder="search product" />
            <SearchIcon />
          </form>
        </div>
      </div>
      <div className="flex py-4 justify-between items-center">
        <Image src={"/logo.svg"} width={134} height={44} alt="logo" />
        <div className="flex gap-24">
          <div>Home</div>
          <div>Bags</div>
        </div>
      </div>
    </header>
  );
}
