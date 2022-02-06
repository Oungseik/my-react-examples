import Color from "./Color";
import { useColors } from "../../hooks";
import { ColorContextType } from "../../contexts/ColorProvider";

export default function ColorList() {
  const { colors, rateColor, removeColor } = useColors() as ColorContextType;

  const colorsLength = colors?.length || 0;
  if (!colorsLength) return <div>No colors listed! (Add a Color)</div>;

  return (
    <div className="color-list">
      {colors?.map(color => (
        <Color
          key={color.id}
          {...color}
          onRate={rateColor}
          onRemove={removeColor}
        />
      ))}
    </div>
  );
}
