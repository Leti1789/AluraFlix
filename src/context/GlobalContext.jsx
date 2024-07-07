import axios from 'axios';
import { createContext } from "react";
import { useState, useEffect } from "react";


//Creando el contexto

export const GlobalContext = createContext();


// Creando el componente que me va a permitir compartir



const GlobalContextProvider = ({ children }) => {
  
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

// Estado del componente FormModal
  const [isModalOpen, setIsModalOpen] = useState(false);
   // Nuevo estado para el video actual
  const [currentVideo, setCurrentVideo] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3001/categorias")
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

    useEffect(() => {
    fetch("http://localhost:3001/videos")
      .then(response => response.json())
      .then(data => {
        setVideos(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }, []);
  
  //Eliminar video

    const deleteVideo = (id) => {
    axios.delete(`http://localhost:3001/videos/${id}`)
      .then(() => {
        setVideos(videos.filter(video => video.id !== id));
      })
      .catch(error => {
        console.error('Error al borrar el video:', error);
      });
    };
  
  // Crear nuevo video
  const createVideo = (nuevoVideo) => {
    axios.post("http://localhost:3001/videos", nuevoVideo)
      .then(response => {
        setVideos([...videos, response.data]);
      })
      .catch(error => {
        console.error('Error al crear el video:', error);
      });
  };
  

  //Editar CardVideo

  const editVideo = (id, updatedVideo) => {
    axios.put(`http://localhost:3001/videos/${id}`, updatedVideo)
      .then(response => {
        const updatedVideos = videos.map(video => 
          video.id === id ? response.data : video
        );
        setVideos(updatedVideos);
      })
      .catch(error => console.error('Error al editar el video:', error));
  };
  
  

  return (
    <GlobalContext.Provider value={{
      categories,
      videos,
      deleteVideo,
      isModalOpen,
      setIsModalOpen,
      createVideo,
      editVideo,
      currentVideo,
      setCurrentVideo
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider