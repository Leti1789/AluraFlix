import styles from "./Banner.module.css";
import bannerCard from "../../assets/img/bannerCard.png";

const Banner = () => {
  return (
    <div className={styles.container}>

      <div className={styles.containerBannerImage}>
        <div className={styles.bannerContent}>

        <div className={styles.bannerTextContent}>
          <div className={styles.titulo}>FRONT END</div>
            <div className={styles.subtitulo}>Challenge React</div>
            <div className={styles.textBanner}>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
            </div>
          </div>
          <img className={styles.bannerCard} src={bannerCard} alt="" />
      
        </div>
      </div>
    </div>
  )
}

export default Banner