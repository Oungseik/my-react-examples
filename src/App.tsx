import { useState } from "react";
import { v4 } from "uuid";
import colorData from "./data/color-data.json";

import AddColorForm from "./components/Form/ControlledAddColorForm";
import ColorList from "./components/ColorList";

function App() {
  const [colors, setColors] = useState(colorData);

  const removeColorHandler = (id: string) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  };

  const rateColorHandler = (id: string, rating: number) => {
    const newColors = colors.map(color =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const addColorHandler = (title: string, color: string): void => {
    const newColors = [...colors, { id: v4(), title, color, rating: 0 }];
    setColors(newColors);
  };

  return (
    <div className="App">
      <AddColorForm onNewColor={addColorHandler} />
      <ColorList
        colors={colors}
        onRemoveColor={id => removeColorHandler(id)}
        onRateColor={rateColorHandler}
      />
    </div>
  );
}

export default App;
