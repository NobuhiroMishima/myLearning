import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";



const InputMovieRating = ({ rating, onChange }) => {
  return (
    <div className="form-rating">
      <div className="label__rating" >動画の評価</div>
      {
          <Rating
          emptySymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#e4dccb" }} />}
          fullSymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />}
          value={rating}
          fractions={1}
          initialRating={rating}
          onChange={onChange}
          />
        }
    </div>
  );
};

export default InputMovieRating;
