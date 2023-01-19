import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/carousel/1-new.jpg';
import img2 from '../../assets/carousel/2-new.jpg';
import img3 from '../../assets/carousel/3-new.jpg';
import img4 from '../../assets/carousel/4-new.jpg';

const responsiveImageHero = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 1
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 1
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const images = [
    img1, img2, img3, img4
];

const CarouselContainer = () => {
    return (
        <Carousel
            showDots
            infinite
            containerClass="carouselContainer"
            slidesToSlide={1}
            responsive={responsiveImageHero}
        >
            {images.slice(0, 4).map((image, id) => {
                return (
                    <img
                        key={id}
                        draggable={true}
                        src={image}
                        style={{
                            width: '100%',
                            display: 'block',
                            height: '90vh',
                            margin: '0 auto',
                            objectFit: 'cover',
                        }}
                        alt={'img'} />
                );
            })}
        </Carousel>
    );
}

export default CarouselContainer;
