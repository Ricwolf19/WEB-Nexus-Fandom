import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const carouselOptions = {
    // Otras opciones del carrusel...
  };

  return (
    <div style={{ maxHeight: '400px', overflow: 'hidden' }}>
      <Carousel {...carouselOptions}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
