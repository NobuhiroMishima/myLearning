const InputMovieInstructor = () => {
  return (
    <div className="formpart">
      <label className="label__instructor" htmlFor="movie-instructor">講師</label>
      <input className="input__instructor" type="text" id="movie-instructor" placeholder="講師名を入力してください。" maxLength="220" />
    </div>
  );
};

export default InputMovieInstructor;
