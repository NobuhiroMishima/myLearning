import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({movie}) => {
  return (
    <Link className="movie" to="/detail">
      <h3 className="movie__title">{movie.title}</h3>
      <div className="movie__rate">
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
      </div>
      <div className="movie__img">
        <img
          src={`/src/assets/images/${movie.img}`}
          alt={movie.title}
        />
      </div>
      <div className="movie__instructor">
        <p className="movie__instructor__title">動画作成者</p>
        <p className="movie__instructor__body">{movie.instructor}</p>
      </div>
      <div className="movie__comment">
        <p className="movie__comment__title">動画の感想</p>
        <p className="movie__comment__body">{movie.comment}</p>
      </div>
    </Link>
  );
};

export default Card;
