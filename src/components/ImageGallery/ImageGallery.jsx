import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul>
      {images.map((image) => (
        <li
          onClick={() => {
            openModal(image.urls.regular);
          }}
          key={image.id}
        >
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}
