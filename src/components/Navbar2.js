import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: '#201324' }}>
            <Link to="/" className="navbar-brand">
                <img src="/Img/Logo2.png" alt="Logo da Loja Virtual" style={{ height: '100px' }} />
            </Link>
        </nav>
    );
};

export default Navbar2;
