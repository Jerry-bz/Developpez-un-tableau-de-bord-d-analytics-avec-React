import { NavLink } from "react-router-dom";
import logo from '../../assets/logoSportSee.svg'
import styles from './Header.module.css'

export default function Header() {

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo-entreprise"></img>
      <nav className={styles.nav}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </header>
  );
};

