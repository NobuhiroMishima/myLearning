const InputMovieComment = () => {
  return (
    <div className="formpart">
      <label className="label__comment" htmlFor="movie-comment">動画タイトル</label>
      <textarea className="textarea__comment" type="text" id="movie-comment" rows="3" placeholder="感想を入力してください。" maxLength="100" />
    </div>
  );
};

export default InputMovieComment;
