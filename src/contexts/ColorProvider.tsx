import { useState, createContext } from "react";
import { v4 } from "uuid";
import colorData from "../data/color-data.json";
import { ColorData } from "../types";

export type ColorContextType = {
  colors: ColorData[],
  addColor: (title: string, color: string) => void,
  rateColor: (id: string, rating: number) => void,
  removeColor: (id: string) => void,
}

export const ColorContext = createContext<ColorContextType | null>(null);

export default function ColorProvide({ children }: { children: JSX.Element }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      }
    ])
  };

  const rateColor = (id: string, rating: number) => {
    setColors(colors.map(color => color.id === id ? { ...color, rating } : color))
  };

  const removeColor = (id: string) => {
    setColors(colors.filter(color => color.id !== id));
  }

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  )
}

