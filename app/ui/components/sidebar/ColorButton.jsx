export default function ColorButton({ isActive, color, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer ${
        isActive ? "outline-3 outline-[#006CFF]/30 outline-offset-4" : "border-0 p-0"
      }`}
    >
        <div className="w-full h-full rounded-full" style={{backgroundColor:color}}></div>
    </div>
  );
}
