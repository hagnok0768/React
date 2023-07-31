import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ProductCard = ({ imageSrc, title, description, price }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const newItem = {
            id: Date.now(),
            imageSrc,
            title,
            description,
            price,
        };
        addToCart(newItem);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={imageSrc} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <Link to="/cart" className="btn btn-dark" onClick={handleAddToCart}>
                        Comprar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
