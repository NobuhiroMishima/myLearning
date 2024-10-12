const InputMovieComment = ({ register, errors }) => {
  return (
    <div className="formpart">
      <label className="label__comment" htmlFor="movie-comment">
        動画タイトル
      </label>
      <textarea
        {...register("comment", {
          required: "感想を入力してください。",
          maxLength: { value: 200, message: `200文字以内で入力してください。` },
        })}
        className="textarea__comment"
        type="text"
        id="movie-comment"
        rows="3"
      />
      {errors.comment && (
        <div className="error-msg">{errors.comment.message}</div>
      )}
    </div>
  );
};

export default InputMovieComment;
