import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';

import { ProductTile } from "../ProductTile/ProductTile.jsx";

export const Carousel = ({ title, pagination, ...props }) => {
  const arrowsClass = props.arrowsPlacement === 'top' ? 'arrowsTop' : 'arrowsMiddle';

  const settings = {
    dots: pagination ? true : false,
    arrows: props.showArrows ? true : false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const slides = [];
  const min = 8;
  const max = 12;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  for (var i = 0; i < number; i++) {
    slides.push(
      {
        img: `https://picsum.photos/300/400?random=${i + 1}`,
        title: 'Slide Title',
        subtitle: 'Example description for slide'
      }
    )
  }

  const renderSlides = () => {
    return slides.map((slide, idx) => {
      return <ProductTile data={slide} key={idx} />
    })
  }

  return (
    <div className={['carousel', arrowsClass].join(' ')}>
      <div className="carousel-top">
        <h2>{title}</h2>
      </div>
      {slides && slides.length ?
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {renderSlides()}
          </Slider>
        </div>
      : null}
    </div>
  );
}

Carousel.propTypes = {
  pagination: PropTypes.bool,
  title: PropTypes.string,
  showArrows: PropTypes.bool,
  arrowsPlacement: PropTypes.string
};