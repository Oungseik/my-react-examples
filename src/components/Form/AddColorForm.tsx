import { useRef } from "react";

interface AddColorFormProps {
  onNewColor: (title: string, color: string) => void;
}

export default function AddColorForm({ onNewColor = f => f }: AddColorFormProps) {
  const txtTitle = useRef<HTMLInputElement>(null);
  const hexColor = useRef<HTMLInputElement>(null);

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const title = txtTitle.current?.value || "";
    const color = hexColor.current?.value || "";
    onNewColor(title, color);
    txtTitle.current?.value ? txtTitle.current.value = "" : null;
    hexColor.current?.value ? hexColor.current.value = "" : null;
  }

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  )
}
