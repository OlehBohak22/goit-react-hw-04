import ReactModal from "react-modal";

const style = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    overflow: "visible",
    padding: 0,
    border: "none",
    inset: "5vw",
  },
};
export default function ImageModal({ closeModal, image, isOpen }) {
  return (
    <ReactModal style={style} isOpen={isOpen} onRequestClose={closeModal}>
      <img src={image} alt="" />
    </ReactModal>
  );
}
