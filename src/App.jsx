import { useEffect, useState } from "react";
import { fetchImagesWithTopic } from "./api/unsplash-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loader, setLoader] = useState(false);
  const [isError, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [targetImage, setTargetImage] = useState("");

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoader(true);
        setError(false);

        const items = await fetchImagesWithTopic(topic, page);

        if (items.length === 0) {
          setHasMore(false);
        } else {
          setImages((prevImages) => [...prevImages, ...items]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    if (topic) {
      fetchImages();
    }
  }, [topic, page]);

  function onSubmit(currentTopic) {
    setTopic(currentTopic);
    setPage(1);
    setImages([]);
    setHasMore(true);
    setError(false); // Скидаємо помилку при новому сабміті
  }

  function openModal(target) {
    setModalIsOpen(true);
    setTargetImage(target);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {isError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery openModal={openModal} images={images} />
      )}

      <ImageModal
        // closeModal={closeModal}
        image={targetImage}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />

      <Loader isActive={loader} />
      {hasMore && images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
}

export default App;
