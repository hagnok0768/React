import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Img/carousel2.png"
                    alt="Slide 1"
                />
                <Carousel.Caption className="custom-caption">
                    <h2>A Arte da Vida</h2>
                    <p>A arte nos ensina a encontrar beleza em cada momento, a transformar as cores da vida em obras-primas que emocionam e inspiram."</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Img/carousel5.png"
                    alt="Slide 3"
                />
                <Carousel.Caption className="custom-caption">
                    <h2>O Poder da Criatividade</h2>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Adicione mais Carousel.Items conforme necessário */}
        </Carousel>
    );
};

export default CarouselComponent;