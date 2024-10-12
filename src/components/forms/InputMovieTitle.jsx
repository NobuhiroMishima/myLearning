const InputMovieTitle = ({ register, errors }) => {
  return (
    <div className="formpart">
      <label className="label__title" htmlFor="movie-title">
        動画タイトル
      </label>
      <input
        {...register("title", {
          required: "タイトルを入力してください。",
          maxLength: { value: 100, message: `100文字以内で入力してください。` },
        })}
        className="input__title"
        type="text"
        id="movie-title"
      />
      {errors.title && <div className="error-msg">{errors.title.message}</div>}
    </div>
  );
};

export default InputMovieTitle;
