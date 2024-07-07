import styles from "./Header.module.css";
import Logo from "../../assets/img/LogoAluraFlix.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={Logo} alt="Logo Aluraflix" />
        </section>
      </Link>
      <nav className={styles.navBar}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/nuevoVideo">
          <button>Nuevo video</button>
        </Link>
      </nav>
    </div>
  )
};

export default Header