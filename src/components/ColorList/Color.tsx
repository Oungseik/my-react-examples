import StarRating from "../StarRating";
import { FaTrash } from "react-icons/fa";
import { ColorData } from '../../types/index';

export type ColorProps = {
  onRemove?: (arg: any) => void;
  onRate?: (id: string, rating: number) => void;
} & ColorData;

export default function Color({ id, title, color, rating, onRemove = f => f, onRate = f => f }: ColorProps) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)} >
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rating) => onRate(id, rating)} />
    </section>
  )
}
