import styles from "./Cargando.module.css"
import image from "../../assets/img/cargando.gif"

const Cargando = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="Cargando..." className={styles.imagenCargando} />
    </div>
  )
}

export default Cargando