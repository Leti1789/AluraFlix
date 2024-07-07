
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./Player.module.css";
import { GlobalContext } from "../../context/GlobalContext";


const Player = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/videos/${id}`);
        setVideo(response.data);
      } catch (error) {
        setError("Video no encontrado");
        navigate("*");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();

    return () => {
      setVideo(null)}
      
    }
  , [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.containerPrincipal}>
      <h1 className={styles.titulo}>{video.titulo}</h1>
      <section className={styles.container}>
        {video ? (
          <iframe 
            src={video.linkVideo}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <p>Video no encontrado</p>
        )}
      </section>
    </div>
  );
};

export default Player;
