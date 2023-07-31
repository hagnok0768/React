import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container text-center">
                <p>Endereço: Rua das Lojas, 123 - Centro - Cidade</p>
                <p>Telefone: (00) 1234-5678</p>
                <p>
                    Redes Sociais: <a href="#" className="text-light">Facebook</a> | <a href="#" className="text-light">Instagram</a> |{' '}
                    <a href="#" className="text-light">Twitter</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;