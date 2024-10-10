import Button from "./Button";
const EditModal = ({ toggleEditModal }) => {
  const clickCancel = () => toggleEditModal();

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="action-area">
          <Button className="gray" onClick={clickCancel}>
            戻る
          </Button>
          <Button className="green">更新</Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
