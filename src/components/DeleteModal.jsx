import Button from "./Button";

const DeleteModal = ({ toggleDeleteModal }) => {
  const clickCancel = () => toggleDeleteModal();
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="action-area">
          <Button className="gray" onClick={clickCancel}>
            戻る
          </Button>
          <Button className="red">削除</Button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
