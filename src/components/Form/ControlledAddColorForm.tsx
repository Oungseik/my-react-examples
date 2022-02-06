import { useInput, useColors } from "../../hooks";
import { ColorContextType } from "../../contexts/ColorProvider";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors() as ColorContextType;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (addColor) {
      addColor(titleProps.value, colorProps.value);
    }
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title" required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
