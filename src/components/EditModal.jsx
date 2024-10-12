import Button from "./Button";
import InputMovieTitle from "./forms/InputMovieTitle";
import InputMovieInstructor from "./forms/InputMovieInstructor";
import InputMovieComment from "./forms/InputMovieComment";
import InputMovieImg from "./forms/InputMovieImg";
import InputMovieRating from "./forms/InputMovieRating";
import { useDispatchMovies } from "../contexts/MovieContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import moviesApi from "../api/movies";

const EditModal = ({ toggleEditModal, movie, setMovie }) => {
  const clickCancel = () => toggleEditModal();
  const dispatch = useDispatchMovies();

  const [editMovie, setEditMovie] = useState({ ...movie });

  const handleChangeRating = (rate) =>
    setEditMovie({ ...editMovie, rating: rate });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      title: editMovie.title,
      instructor: editMovie.instructor,
      comment: editMovie.comment,
    },
  });

  const [error, setError] = useState("");
  const onSubmit = async (inputs) => {
    const formedMovie = {
      _id: editMovie._id,
      title: inputs.title,
      instructor: inputs.instructor,
      comment: inputs.comment,
      rating: editMovie.rating,
      img: editMovie.img,
    };

    console.log("Submitting formedMovie:", formedMovie); // 送信データの確認

    try {
      const req = await moviesApi.patch(formedMovie);
      dispatch({ type: "movie/update", payload: req });
      reset();
      setMovie(req);
      toggleEditModal();
    } catch (e) {
      console.log("エラーが発生しました。, e");
      setError(e);
    }
  };

  return (
    <div className="modal-container">
      <form className="modal form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="movie__title">{`${movie.title}を編集`}</h3>
        <InputMovieTitle register={register} errors={errors} />
        <InputMovieInstructor register={register} errors={errors} />
        <InputMovieComment register={register} errors={errors} />
        <InputMovieImg register={register} />
        <InputMovieRating
          rating={editMovie.rating}
          onChange={handleChangeRating}
        />

        <div className="error-msg">{error}</div>

        <div className="action-area">
          <Button className="gray" onClick={clickCancel}>
            戻る
          </Button>
          <Button type="submit" className="green">
            更新
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
