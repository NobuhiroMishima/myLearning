import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputMovieComment from "../components/forms/InputMovieComment";
import InputMovieImg from "../components/forms/InputMovieImg";
import InputMovieInstructor from "../components/forms/InputMovieInstructor";
import InputMovieRating from "../components/forms/InputMovieRating";
import InputMovieTitle from "../components/forms/InputMovieTitle";
import { useState } from "react";
import { useDispatchMovies } from "../contexts/MovieContext";
import { useForm } from "react-hook-form";
import moviesApi from "../api/movies.mjs";
import { InputMovieComplete } from "../components/forms/InputMovieComplete";
import noImageUrl from '/src/assets/images/noMovie.png';


const NewMovie = () => {
  const PUBLIC_FOLDER = import.meta.env.VITE_PUBLIC_FOLDER;

  const dispatch = useDispatchMovies();

  const navigate = useNavigate();

  const [rating, setRating] = useState(1);
  const [previewImage, setPreviewImage] = useState(noImageUrl);

  const handleChangeRating = (rate) => setRating(rate);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("img", file);
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl);
      setPreviewImage(imageUrl);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    revalidateMode: "onSubmit",
  });

  const [error, setError] = useState("");
  const onSubmit = async (inputs) => {
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("instructor", inputs.instructor);
    formData.append("comment", inputs.comment);
    formData.append("rating", rating);
    formData.append("complete", inputs.complete);

    if (inputs.img) {
      formData.append("img", inputs.img);
    }

    try {
      const req = await moviesApi.post(formData);
      dispatch({ type: "movie/add", payload: req });
      reset();
      navigate("/movies");
    } catch (e) {
      console.log("エラーが発生しました。", e);
      setError(e);
    }
  };

  return (
    <div className="small-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="movie__title">学習した動画を投稿しよう！</h1>
        <InputMovieTitle register={register} errors={errors} />
        <InputMovieInstructor register={register} errors={errors} />
        <InputMovieComment register={register} errors={errors} />
        <InputMovieImg
          register={register}
          handleChangeImage={handleChangeImage}
          previewImage={previewImage}
        />
        <InputMovieComplete register={register} errors={errors} />

        <InputMovieRating rating={rating} onChange={handleChangeRating} />

        <div className="error-msg">{error && error.message}</div>

        <div className="action-area">
          <Button type="submit" className="green">
            登録
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewMovie;
