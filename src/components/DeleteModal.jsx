import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatchMovies } from "../contexts/MovieContext"
import moviesApi from "../api/movies.mjs";
import { useState } from "react";

const DeleteModal = ({ toggleDeleteModal, movie }) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatchMovies();

  const clickDelete = async() => {
    try{
      await moviesApi.delete(movie._id);
      dispatch({type: "movie/delete", payload: movie});
      toggleDeleteModal();
      navigate('/movies');
    }catch(e){
      setError(e);
    }

  }

  return (
    <div className="modal-container">
      <form className="modal form">
      <h3 className="movie__title">{`${movie.title}を削除しますか？`}</h3>
      <p className="alert">一度削除すると元には戻せません。</p>
      <div className="error-msg text-center">{error}</div>
        <div className="action-area">
          <Button className="gray" onClick={toggleDeleteModal}>
            戻る
          </Button>
          <Button className="red" onClick={clickDelete}>削除</Button>
        </div>
      </form>
    </div>
  );
};
export default DeleteModal;
