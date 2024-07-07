import styles from "./Footer.module.css";
import Logo from "../../assets/img/LogoAluraFlix.png"

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <img className={styles.LogoImagen} src={Logo} alt="LogoAlura" />
    </div>
  )
}

export default Footer