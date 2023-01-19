import React from 'react'
import About from '../../components/about/About';
import CarouselContainer from '../../components/carousel/CarouselContainer';
import Services from '../../components/services/Services';

const HomePage = () => {
    return (
        <div>
            <CarouselContainer />
            <Services />
            <About />
        </div>
    )
}

export default HomePage;
