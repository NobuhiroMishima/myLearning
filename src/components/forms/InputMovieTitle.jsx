const InputMovieTitle = () => {
  return (
    <div className="formpart">
      <label className="label__title" htmlFor="movie-title">動画タイトル</label>
      <input className="input__title" type="text" id="movie-title" placeholder="タイトルを入力してください。" maxLength="100" />
    </div>
  );
};

export default InputMovieTitle;
