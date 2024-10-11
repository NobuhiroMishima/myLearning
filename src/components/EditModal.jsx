
import Button from "./Button";
import InputMovieTitle from "./forms/InputMovieTitle";
import InputMovieInstructor from "./forms/InputMovieInstructor";
import InputMovieComment from "./forms/InputMovieComment";
import InputMovieImg from "./forms/InputMovieImg";
import InputMovieRating from "./forms/InputMovieRating";

const EditModal = ({ toggleEditModal }) => {
  const clickCancel = () => toggleEditModal();

  return (
    <div className="modal-container">
      <form className="modal form">
      <h3 className="movie__title">動画のタイトルを編集</h3>
        <InputMovieTitle />
        <InputMovieInstructor />
        <InputMovieComment />
        <InputMovieImg />
        <InputMovieRating />

        <div className="action-area">
          <Button className="gray" onClick={clickCancel}>
            戻る
          </Button>
          <Button className="green">更新</Button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
