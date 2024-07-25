// components/ImageCarousel.js

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <Slider {...settings}>
            {images?.map((image, index) => (
                <div key={index} className="relative h-96 mob:h-64 laptop:h-96 w-full">
                    <Image
                        src={image}
                        alt={`Slide ${index}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
