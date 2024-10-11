import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const InputMovieRating = () => {
  return (
    <div className="form-rating">
      <label className="label__rating" htmlFor="movie-rating">動画の評価</label>

      <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
      <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
      <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
      <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
      <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
    </div>
  );
};

export default InputMovieRating;
