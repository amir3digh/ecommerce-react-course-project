import PriceRange from "./PriceRange";
import SidebarItem from "./SidebarItem";
import Colors from "./Colors";

export default function Sidebar() {
  const colorArray = [
    "#006CFF",
    "#FC3E39",
    "#171717",
    "#FFF600",
    "#FF00B4",
    "#EFDFDF",
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col bg-[#F6F7F8] p-5 gap-4">
        <p className="capitalize font-semibold">hot deals</p>
        <SidebarItem title="nike" count="2" />
        <SidebarItem isActive title="airmax" count="48" />
        <SidebarItem title="nike" count="14" />
        <SidebarItem title="adidas" count="15" />
        <SidebarItem title="vans" count="23" />
        <SidebarItem title="all stars" count="1" />
        <SidebarItem title="adidas" count="95" />
      </div>
      <div className="flex flex-col bg-[#F6F7F8] p-5 gap-4">
        <p className="uppercase font-semibold">prices</p>
        <PriceRange minP={0} maxP={1000} />
      </div>
      <div className="flex flex-col bg-[#F6F7F8] p-5 gap-4">
        <p className="uppercase font-semibold">color</p>
        <Colors colors={colorArray} />
      </div>
      <div className="flex flex-col bg-[#F6F7F8] p-5 gap-4">
        <p className="uppercase font-semibold">brand</p>
        <SidebarItem title="nike" count="99" />
        <SidebarItem isActive title="nike" count="99" />
        <SidebarItem title="adidas" count="99" />
        <SidebarItem title="Siemens" count="99" />
      </div>
      <div className="flex items-center justify-center cursor-pointer bg-[#F6F7F8] p-5 gap-4">
        <p className="uppercase font-semibold">more</p>
      </div>
    </div>
  );
}
