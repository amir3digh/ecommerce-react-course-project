"use client";
import { useState } from "react";
import PagingItem from "./PagingItem";

export default function Paging({ totalPages }) {
  const [activePage, setActivePage] = useState(3);

  return (
    <div className="bg-[#FAFAFB] w-full">
      <div className="flex items-center justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <PagingItem
            key={index}
            isActive={index + 1 === activePage}
            pageNumber={index + 1}
            onClick={() => setActivePage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
