import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartPage.css';
import Navbar2 from './Navbar2';

function CartPage() {
    const { cartItems, totalAmount, removeFromCart } = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    };

    return (
        <div>
            <Navbar2 />
            <div className="cart-page">
                <h1>Carrinho de Compras</h1>
                {cartItems.length === 0 ? (
                    <p>O carrinho está vazio.</p>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <img src={item.imageSrc} alt={item.title} style={{ width: '100px' }} />
                                    <h3>{item.title}</h3>
                                    <p>Preço: R$ {item.price}</p>
                                    <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total: R$ {totalAmount.toFixed(2)}</p>
                        <button>Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
