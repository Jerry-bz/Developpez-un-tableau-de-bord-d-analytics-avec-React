import { NavLink } from "react-router-dom";
import logo from "../../assets/logoSportSee.svg";
import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img className="header_img" src={logo} alt="logo-entreprise"></img>
      <nav className="header_nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </header>
  );
}
