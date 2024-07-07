import { useContext } from "react";
import styles from "./CardVideo.module.css";
import { RiEdit2Fill, RiDeleteBin2Line } from "react-icons/ri";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const CardVideo = ({ id, linkImagenVideo, categoriaColor }) => {
  const { deleteVideo, setIsModalOpen, setCurrentVideo, videos } = useContext(GlobalContext);

  const handleEdit = () => {
    const videoToEdit = videos.find(video => video.id === id);
    setCurrentVideo(videoToEdit);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.containerCard} style={{ borderColor: categoriaColor }}>
      <Link className={styles.link} to={`/${id}`}>
        <div className={styles.imageContainer}>
          <img src={linkImagenVideo} alt="Imagen video" />
        </div>
      </Link>
      <footer className={styles.containerFooter}>
        <div className={styles.iconContainer} onClick={handleEdit}>
          <RiEdit2Fill className={styles.icon} />
          <span>Editar</span>
        </div>
        <div className={styles.iconContainer} onClick={() => deleteVideo(id)}>
          <RiDeleteBin2Line className={styles.icon} />
          <span>Borrar</span>
        </div>
      </footer>
    </div>
  );
};

export default CardVideo;

