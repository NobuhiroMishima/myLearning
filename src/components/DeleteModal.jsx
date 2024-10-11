import Button from "./Button";

const DeleteModal = ({ toggleDeleteModal, movie }) => {
  const clickCancel = () => toggleDeleteModal();
  return (
    <div className="modal-container">
      <form className="modal form">
      <h3 className="movie__title">{`${movie.title}を削除しますか？`}</h3>
      <p className="alert">一度削除すると元には戻せません。</p>
        <div className="action-area">
          <Button className="gray" onClick={clickCancel}>
            戻る
          </Button>
          <Button className="red">削除</Button>
        </div>
      </form>
    </div>
  );
};
export default DeleteModal;
