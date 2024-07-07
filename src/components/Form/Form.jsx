import { useContext, useState } from "react";
import styles from "./Form.module.css";
import { GlobalContext } from "../../context/GlobalContext";

const Form = () => {
  const { categories, createVideo } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    titulo: "",
    Categoria: "", 
    linkImagenVideo: "",  
    linkVideo: "",  
    descripcion: ""
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateTitulo = (value) => {
    const regex = /^.{1,20}$/;
    if (!value) {
      return "Este campo es obligatorio.";
    } else if (!regex.test(value)) {
      return "El formato de este campo no es válido.";
    } else {
      return "";
    }
  };

  const validateCategoria = (value) => {
    const regex = /^.{1,10}$/;
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
      createVideo(formData);
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

  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.containerTexto}>
        <h1>NUEVO VIDEO</h1>
        <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
        <div className={styles.titulo}>
          <h2>Crear Tarjeta</h2>
        </div>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              name="titulo"
              placeholder="título del video"
              value={formData.titulo}
              onChange={handleChange}
              className={errors.titulo ? styles.inputError : ""}
            />
            <div className={styles.err}>{errors.titulo && <span className={styles.error}>{errors.titulo}</span>}</div>
            
          </div>
          <div className={styles.column}>
            <label htmlFor="Categoria">Categoría</label>
            <select
              name="Categoria"
              value={formData.Categoria}
              onChange={handleChange}
              className={errors.Categoria ? styles.inputError : ""}
              defaultValue=""
            >
              <option value="" disabled hidden>Seleccione una categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.categoriaNombre}>{cat.categoriaNombre}</option>
              ))}
            </select>
            <div className={styles.err} >{errors.Categoria && <span className={styles.error}>{errors.Categoria}</span>}</div>
            
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="linkImagenVideo">Imagen</label>
            <input
              type="text"
              name="linkImagenVideo"
              placeholder="link de la imagen"
              value={formData.linkImagenVideo}
              onChange={handleChange}
              className={errors.linkImagenVideo ? styles.inputError : ""}
            />
            <div className={styles.err}>{errors.linkImagenVideo && <span className={styles.error}>{errors.linkImagenVideo}</span>} </div>
          </div>
          <div className={styles.column}>
            <label htmlFor="linkVideo">Video</label>
            <input
              type="text"
              name="linkVideo"
              placeholder="link del video"
              value={formData.linkVideo}
              onChange={handleChange}
              className={errors.linkVideo ? styles.inputError : ""}
            />
              <div className={styles.err}>{errors.linkVideo && <span className={styles.error}>{errors.linkVideo}</span>}</div> 
          </div>
        </div>
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          name="descripcion"
          placeholder="¿De qué se trata este video?"
          value={formData.descripcion}
          onChange={handleChange}
          className={errors.descripcion ? styles.inputError : ""}
        />
        <div className={styles.err}>{errors.descripcion && <span className={styles.error}>{errors.descripcion}</span>} </div>
        <div className={styles.containerBotones}>
          <button type="submit" className={styles.buttonGuardar} disabled={!isValid || !Object.values(formData).every(Boolean)}>GUARDAR</button>
          <button type="button" onClick={handleReset} className={styles.buttonLimpiar}>LIMPIAR</button>
        </div>
      </form>
    </div>
  );
};

export default Form;



