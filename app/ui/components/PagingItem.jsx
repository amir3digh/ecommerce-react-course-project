export default function PagingItem({ isActive, pageNumber, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center w-14 h-14 cursor-pointer ${
        isActive ? "bg-[#40BFFF] text-white" : "bg-none text-black"
      }`}
    >
      {pageNumber}
    </div>
  );
}
