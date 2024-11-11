import ReactModal from "react-modal";

export default function ImageModal({ closeModal, image, isOpen }) {
  return (
    <ReactModal isOpen={isOpen}>
      <img src={image} alt="" />
      <button onClick={closeModal}>egehb</button>
    </ReactModal>
  );
}
