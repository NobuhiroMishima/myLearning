import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../components/Button";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import { useParams, useNavigate } from "react-router-dom";
import moviesApi from "../api/movies";


const ModalPortal = ({ children }) => {
  const target = document.querySelector(".container");
  return createPortal(children, target);
};

const Movie = () => {
  const {id} = useParams();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await moviesApi.getOne(id);
      setMovie(res)
    }
    fetchMovie();
  }, [])

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModal = () => setIsEditModalOpen((prev) => !prev);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const toggleDeleteModal = () => setIsDeleteModalOpen((prev) => !prev);

  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <>
      <div className="detail">
        <h3 className="movie__title">{movie.title}</h3>
        <div className="movie__img">
          <img
            src={`/src/assets/images/${movie.img}`}
            alt="【2023年最新】【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門（フロントエンド編）"
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
        <div className="movie__rate">
          <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#ffd233" }} />
        </div>
        <div className="action-area">
          <Button className="green" onClick={toggleEditModal}>
            編集
          </Button>
          <Button className="red" onClick={toggleDeleteModal}>
            削除
          </Button>
        </div>
      </div>

      {isEditModalOpen && (
        <ModalPortal>
          <EditModal toggleEditModal={toggleEditModal} movie={movie} setMovie={setMovie} />
        </ModalPortal>
      )}

      {isDeleteModalOpen && (
        <ModalPortal>
          <DeleteModal toggleDeleteModal={toggleDeleteModal} movie={movie} />
        </ModalPortal>
      )}

      <div className="go-home">
        <Button className="gray" onClick={goHome}>
          戻る
        </Button>
      </div>
    </>
  );
};

export default Movie;
