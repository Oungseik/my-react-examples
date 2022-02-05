import { useState } from "react";

interface AddColorFormProps {
  onNewColor: (title: string, color: string) => void;
}

export default function AddColorForm({ onNewColor = f => f }: AddColorFormProps) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  }

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="color title" required />
      <input value={color} onChange={e => setColor(e.target.value)} type="color" required />
      <button>ADD</button>
    </form>
  )
}

