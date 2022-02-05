import { ColorData } from "../../types";
import Color from "./Color";

interface ColorListProps {
  colors: ColorData[];
  onRemoveColor?: (arg: string) => void;
  onRateColor?: (id: string, rating: number) => void;
}

export default function ColorList({
  colors,
  onRemoveColor,
  onRateColor,
}: ColorListProps) {
  const colorsLength = colors.length;
  if (!colorsLength) return <div>No colors listed!</div>;

  return (
    <div>
      {colors.map(color => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
