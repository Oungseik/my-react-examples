import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  selected: boolean,
  onSelect: () => void,
}
const Star = ({ selected = false, onSelect }: StarProps) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length: number) => [...Array(length)];

export default function StarRating({ styles = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <div style={{ padding: 5, ...styles }} {...props}>
      {createArray(totalStars).map((_n, i) => <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />)}
      <p>{selectedStars} of {totalStars} stars</p>
    </div>
  )
}
