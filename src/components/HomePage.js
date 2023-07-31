import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import ProductSection from './ProductSection';
import QuemSomos from './QuemSomos';
import NossoTime from './NossoTime';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <ProductSection />
            <QuemSomos />
            <NossoTime />
            <Footer />
        </div>
    );
};

export default HomePage;