export const InputMovieComplete = ({ register, errors }) => {
  return (
    <div className="formpart">
      <label className="label__complete" htmlFor="movie-complete">
        学習完了日
      </label>
      <input
        {...register("complete", {
          required: "学習完了日を入力してください。",
        })}
        className="input__complete"
        type="month"
        id="movie-complete"
      />
      {errors.complete && <div className="error-msg">{errors.complete.message}</div>}
    </div>
  )
}
