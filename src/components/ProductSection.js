import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        imageSrc: '/Img/produto1.png',
        title: 'Tela com Moldura, Dia de Sol',
        description: 'Quadro em tinta óleo.',
        price: 'R$ 750,00',
    },
    {
        id: 2,
        imageSrc: '/Img/produto2.png',
        title: 'Tela com Moldura, Alvorada',
        description: 'Quadro em tinta óleo.',
        price: 'R$ 1500,00',
    },
    {
        id: 3,
        imageSrc: '/Img/produto3.png',
        title: 'Tela com Moldura, Scary Tales',
        description: 'Quadro em tinta óleo.',
        price: 'R$ 5000,00',
    },
    {
        id: 4,
        imageSrc: '/Img/produto4.png',
        title: 'Tela com Moldura, Radiante',
        description: 'Quadro em tinta óleo.',
        price: 'R$ 2250,00',
    },
    {
        id: 5,
        imageSrc: '/Img/produto5.png',
        title: 'Tela com Moldura, Lady da Neve',
        description: 'Quadro em tinta óleo.',
        price: 'R$ 550,00',
    },
    {
        id: 6,
        imageSrc: '/Img/produto6.png',
        title: 'Tela com Moldura, The farmers',
        description: 'Quadro em tinta óleo.',
        price: 'R$ 666,00',
    },
    // Adicione mais produtos conforme necessário
];

const ProductSection = () => {
    return (
        <section id="nossos-produtos" className="py-5">
            <div className="container">
                <h2 className="text-center">Artes Em Destaque</h2>
                <div className="row text-center">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;