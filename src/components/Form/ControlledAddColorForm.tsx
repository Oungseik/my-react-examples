import { useInput } from "../../hooks";

interface AddColorFormProps {
  onNewColor: (title: string, color: string) => void;
}

export default function AddColorForm({ onNewColor = f => f }: AddColorFormProps) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    resetTitle();
    resetColor();
  }

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title" required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  )
}
