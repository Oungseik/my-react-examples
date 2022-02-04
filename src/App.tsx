import { useState } from "react";
import colorData from './data/color-data.json';
import ColorList from "./components/ColorList";

function App() {
  const [colors, setColors] = useState(colorData);

  const removeColorHandler = (id: string) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  }

  const rateColorHandler = (id: string, rating: number) => {
    const newColors = colors.map(color => color.id === id ? { ...color, rating } : color)
    setColors(newColors);

  }

  return <div className="App">
    <ColorList colors={colors} onRemoveColor={id => removeColorHandler(id)} onRateColor={rateColorHandler} />
  </div>;
}

export default App;
