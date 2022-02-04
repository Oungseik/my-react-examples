import { FaStar } from "react-icons/fa";

interface StarProps {
  selected: boolean,
  onSelect?: (f: any) => void,
};

const Star = ({ selected = false, onSelect = f => f }: StarProps) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length: number) => [...Array(length)];

type StarRatingProps = {
  totalStars?: number,
  selectedStars?: number,
  onRate?: (arg: any) => void,
}

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }: StarRatingProps) {

  return (
    <>
      {
        createArray(totalStars).map((n, i) => <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />)
      }
    </>
  )
}


// export default function StarRating({ styles = {}, totalStars = 5, ...props }) {
//   const [selectedStars, setSelectedStars] = useState(3);

//   return (
//     <div style={{ padding: 5, ...styles }} {...props}>
//       {createArray(totalStars).map((_n, i) => <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />)}
//       <p>{selectedStars} of {totalStars} stars</p>
//     </div>
//   )
// }
