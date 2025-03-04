"use client";
import { useState } from "react";
import ColorButton from "./ColorButton";

export default function Colors({ colors }) {
  const [activeColor, setActiveColor] = useState(colors[0]);
  return (
    <div className="flex items-center justify-between">
      {colors.map((color) => (
        <ColorButton
          key={color}
          isActive={activeColor === color}
          color={color}
          onClick={() => setActiveColor(color)}
        />
      ))}
    </div>
  );
}
