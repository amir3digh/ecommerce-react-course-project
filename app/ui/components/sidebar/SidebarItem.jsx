export default function SidebarItem({ isActive, title, count }) {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer ${
        isActive ? "text-[#33A0FF]" : "text-[#22262A]"
      }`}
    >
      <div className="capitalize font-medium">{title}</div>
      <div className={`font-medium ${isActive ? "opacity-100" : "opacity-35"}`}>
        {count}
      </div>
    </div>
  );
}
