import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="movie">
      <h3 className="movie__title">動画のタイトル</h3>
      <div className="movie__rate">
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
      </div>
      <div className="movie__img">
        <img
          src="/src/assets/images/CodeMafia_frontend.jpg"
          alt="【2023年最新】【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門（フロントエンド編）"
        />
      </div>
      <div className="movie__instructor">
        <p className="movie__instructor__title">動画作成者</p>
        <p className="movie__instructor__body">テスト制作者</p>
      </div>
      <div className="movie__comment">
        <p className="movie__comment__title">動画の感想</p>
        <p className="movie__comment__body">テスト完走</p>
      </div>
    </div>
  );
};

export default Card;
