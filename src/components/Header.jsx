import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = ()  => (
	<header className="header">
        <img className="header__img" src="./assets/logo.png" alt="logo" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="./assets/perfil-icon.png" alt="user" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="./iniciar-sesion/iniciar-sesion.html">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;