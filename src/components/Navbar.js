import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: '#201324' }}>
            <a className="navbar-brand" href="#">
                <img src="/Img/Logo2.png" alt="Logo da Loja Virtual" style={{ height: '100px' }} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#quem-somos" id="rainbow">Quem Somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nossos-produtos">Nossos Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nosso-time">Nosso Time</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
