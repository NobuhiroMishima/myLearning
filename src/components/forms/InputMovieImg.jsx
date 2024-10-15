const InputMovieImg = ({ register, handleChangeImage, currentImage }) => {
  return (
    <div className="form-img">
      <label className="label__img" htmlFor="img">
        画像を変更する
      </label>
      <input
        className="input__img"
        type="file"
        id="img"
        accept=".png, .jpeg, .jpg"
        style={{ display: "none" }}
        {...register("img")}
        onChange={handleChangeImage}
      />
      {currentImage && (
        <div className="current-image">
          <p>現在の画像:</p>
          <img
            src={currentImage}
            alt="現在の画像"
            style={{ maxWidth: "100px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default InputMovieImg;
