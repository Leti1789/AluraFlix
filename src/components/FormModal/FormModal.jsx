// import { useContext, useEffect, useState } from "react";
// import styles from "./FormModal.module.css";
// import { TiDeleteOutline } from "react-icons/ti";
// import { GlobalContext } from "../../context/GlobalContext";

// const FormModal = () => {
//   const { isModalOpen, setIsModalOpen, categories, editVideo, currentVideo, setCurrentVideo } = useContext(GlobalContext);

//   const [formData, setFormData] = useState({
//     titulo: "",
//     Categoria: "",
//     linkImagenVideo: "",
//     linkVideo: "",
//     descripcion: ""
//   });

//   useEffect(() => {
//     if (currentVideo) {
//       setFormData({
//         titulo: currentVideo.titulo,
//         Categoria: currentVideo.Categoria,
//         linkImagenVideo: currentVideo.linkImagenVideo,
//         linkVideo: currentVideo.linkVideo,
//         descripcion: currentVideo.descripcion
//       });
//     }
//   }, [currentVideo]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Expresiones regulares:

//     const regexValidators = {
//     titulo: /^.{1,50}$/,  
//     Categoria: /^.{1,12}$/, 
//     linkImagenVideo: /^(http|https):\/\/[^ "]+$/,  // URL válida
//     linkVideo: /^(http|https):\/\/[^ "]+$/,  // URL válida
//     descripcion: /^.{0,150}$/  
//     };
  
//    // Funcion validadora:

//   const validateFormData = (formData) => {
//     for (let field in formData) {
//       if (!formData[field] || !regexValidators[field].test(formData[field])) {
//         return false;
//       }
//     }
//     return true;
//   };
  
  
  
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validar los datos del formulario
//     if (!validateFormData(formData)) {
//       alert("Por favor, asegúrese de que todos los campos estén correctamente llenos.");
//       return;
//     }
//     editVideo(currentVideo.id, formData);
//     setIsModalOpen(false);
//     setCurrentVideo(null);
//   };


  

//   const handleReset = () => {
//     setFormData({
//       titulo: "",
//       Categoria: "",
//       linkImagenVideo: "",
//       linkVideo: "",
//       descripcion: ""
//     });
//   };

//   if (!isModalOpen) return null;

//   return (
//     <>
//       <div className={styles.Overlay}></div>
//       <dialog className={styles.containerPrincipal} open={isModalOpen}>
//         <div className={styles.iconDelete} onClick={() => {
//           setIsModalOpen(false);
//           setCurrentVideo(null);
//         }}>
//           <TiDeleteOutline />
//         </div>
//         <div className={styles.containerTitulo}>
//           <h1>Editar Card</h1>
//         </div>
//         <form className={styles.formContainer} onSubmit={handleSubmit}>
//           <label htmlFor="titulo">Título</label>
//           <input type="text" name="titulo" placeholder="Ingrese título" className={styles.input} value={formData.titulo} onChange={handleChange} />
//           <label htmlFor="Categoria">Categoría</label>
//           <select name="Categoria" value={formData.Categoria} onChange={handleChange} className={styles.select}>
//             <option value="" disabled hidden>Seleccione una categoría</option>
//             {categories.map((cat) => (
//               <option key={cat.id} value={cat.categoriaNombre}>{cat.categoriaNombre}</option>
//             ))}
//           </select>
//           <label htmlFor="linkImagenVideo">Imagen</label>
//           <input type="text" name="linkImagenVideo" placeholder="Ingrese el link de la imagen" className={styles.input} value={formData.linkImagenVideo} onChange={handleChange} />
//           <label htmlFor="linkVideo">Video</label>
//           <input type="text" name="linkVideo" placeholder="Ingrese el link del video" className={styles.input} value={formData.linkVideo} onChange={handleChange} />
//           <label htmlFor="descripcion">Descripción</label>
//           <textarea name="descripcion" placeholder="¿De qué se trata este video?" className={styles.textarea} value={formData.descripcion} onChange={handleChange}></textarea>
//           <div className={styles.containerBotones}>
//             <button type="submit" className={styles.buttonGuardar}>GUARDAR</button>
//             <button type="button" onClick={handleReset} className={styles.buttonLimpiar}>LIMPIAR</button>
//           </div>
//         </form>
//       </dialog>
//     </>
//   );
// };

// export default FormModal;

// FormModal.js
import { useContext, useEffect, useState } from "react";
import styles from "./FormModal.module.css";
import { TiDeleteOutline } from "react-icons/ti";
import { GlobalContext } from "../../context/GlobalContext";

const FormModal = () => {
  const { isModalOpen, setIsModalOpen, categories, editVideo, currentVideo, setCurrentVideo } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    titulo: "",
    Categoria: "",
    linkImagenVideo: "",
    linkVideo: "",
    descripcion: ""
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (currentVideo) {
      setFormData({
        titulo: currentVideo.titulo,
        Categoria: currentVideo.Categoria,
        linkImagenVideo: currentVideo.linkImagenVideo,
        linkVideo: currentVideo.linkVideo,
        descripcion: currentVideo.descripcion
      });
    }
  }, [currentVideo]);

  const validateTitulo = (value) => {
    const regex = /^.{1,50}$/;
    if (!value) {
      return "Este campo es obligatorio.";
    } else if (!regex.test(value)) {
      return "El formato de este campo no es válido.";
    } else {
      return "";
    }
  };

  const validateCategoria = (value) => {
    const regex = /^.{1,12}$/;
    if (!value) {
      return "Este campo es obligatorio.";
    } else if (!regex.test(value)) {
      return "El formato de este campo no es válido.";
    } else {
      return "";
    }
  };

  const validateLinkImagenVideo = (value) => {
    const regex = /^(http|https):\/\/[^ "]+$/;
    if (!value) {
      return "Este campo es obligatorio.";
    } else if (!regex.test(value)) {
      return "El formato de este campo no es válido.";
    } else {
      return "";
    }
  };

  const validateLinkVideo = (value) => {
    const regex = /^(http|https):\/\/[^ "]+$/;
    if (!value) {
      return "Este campo es obligatorio.";
    } else if (!regex.test(value)) {
      return "El formato de este campo no es válido.";
    } else {
      return "";
    }
  };

  const validateDescripcion = (value) => {
    const regex = /^.{0,150}$/;
    if (!value) {
      return "Este campo es obligatorio.";
    } else if (!regex.test(value)) {
      return "El formato de este campo no es válido.";
    } else {
      return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "titulo":
        error = validateTitulo(value);
        break;
      case "Categoria":
        error = validateCategoria(value);
        break;
      case "linkImagenVideo":
        error = validateLinkImagenVideo(value);
        break;
      case "linkVideo":
        error = validateLinkVideo(value);
        break;
      case "descripcion":
        error = validateDescripcion(value);
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: error });

    setIsValid(Object.values(errors).every((val) => val === ""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let allErrors = {};

    for (let key in formData) {
      let error = "";

      switch (key) {
        case "titulo":
          error = validateTitulo(formData[key]);
          break;
        case "Categoria":
          error = validateCategoria(formData[key]);
          break;
        case "linkImagenVideo":
          error = validateLinkImagenVideo(formData[key]);
          break;
        case "linkVideo":
          error = validateLinkVideo(formData[key]);
          break;
        case "descripcion":
          error = validateDescripcion(formData[key]);
          break;
        default:
          break;
      }

      if (error) {
        allErrors[key] = error;
      }
    }

    setErrors(allErrors);

    if (Object.keys(allErrors).length === 0) {
      editVideo(currentVideo.id, formData);
      setIsModalOpen(false);
      setCurrentVideo(null);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      Categoria: "",
      linkImagenVideo: "",
      linkVideo: "",
      descripcion: ""
    });
    setErrors({});
    setIsValid(false);
  };

  if (!isModalOpen) return null;

  return (
    <>
      <div className={styles.Overlay}></div>
      <dialog className={styles.containerPrincipal} open={isModalOpen}>
        <div className={styles.iconDelete} onClick={() => {
          setIsModalOpen(false);
          setCurrentVideo(null);
        }}>
          <TiDeleteOutline />
        </div>
        <div className={styles.containerTitulo}>
          <h1>Editar Card</h1>
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            name="titulo"
            placeholder="Ingrese título"
            className={errors.titulo ? styles.inputError : ""}
            value={formData.titulo}
            onChange={handleChange}
          />
          <div className={styles.err}>{errors.titulo && <span className={styles.error}>{errors.titulo}</span>}</div>
          
          <label htmlFor="Categoria">Categoría</label>
          <select
            name="Categoria"
            value={formData.Categoria}
            onChange={handleChange}
            className={errors.Categoria ? styles.inputError : ""}
          >
            <option value="" disabled hidden>Seleccione una categoría</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.categoriaNombre}>{cat.categoriaNombre}</option>
            ))}
          </select>
          <div className={styles.err}>{errors.Categoria && <span className={styles.error}>{errors.Categoria}</span>}</div>
          
          <label htmlFor="linkImagenVideo">Imagen</label>
          <input
            type="text"
            name="linkImagenVideo"
            placeholder="Ingrese el link de la imagen"
            className={errors.linkImagenVideo ? styles.inputError : ""}
            value={formData.linkImagenVideo}
            onChange={handleChange}
          />
          <div className={styles.err}>{errors.linkImagenVideo && <span className={styles.error}>{errors.linkImagenVideo}</span>}</div>
          
          <label htmlFor="linkVideo">Video</label>
          <input
            type="text"
            name="linkVideo"
            placeholder="Ingrese el link del video"
            className={errors.linkVideo ? styles.inputError : ""}
            value={formData.linkVideo}
            onChange={handleChange}
          />
          <div className={styles.err}>{errors.linkVideo && <span className={styles.error}>{errors.linkVideo}</span>}</div>
          
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            name="descripcion"
            placeholder="¿De qué se trata este video?"
            className={errors.descripcion ? styles.inputError : ""}
            value={formData.descripcion}
            onChange={handleChange}
          />
          <div className={styles.err}>{errors.descripcion && <span className={styles.error}>{errors.descripcion}</span>}</div>
          
          <div className={styles.containerBotones}>
            <button
              type="submit"
              className={styles.buttonGuardar}
              disabled={!isValid || !Object.values(formData).every(Boolean)}
            >
              GUARDAR
            </button>
            <button
              type="button"
              onClick={handleReset}
              className={styles.buttonLimpiar}
            >
              LIMPIAR
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default FormModal;

