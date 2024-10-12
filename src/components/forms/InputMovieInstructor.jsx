const InputMovieInstructor = ({ register, errors }) => {
  return (
    <div className="formpart">
      <label className="label__instructor" htmlFor="movie-instructor">
        講師
      </label>
      <input
        {...register("instructor", {
          required: "講師を入力してください。",
          maxLength: { value: 20, message: `20文字以内で入力してください。` },
        })}
        className="input__instructor"
        type="text"
        id="movie-instructor"
      />
      {errors.instructor && <div className="error-msg">{errors.instructor.message}</div>}
    </div>
  );
};

export default InputMovieInstructor;
