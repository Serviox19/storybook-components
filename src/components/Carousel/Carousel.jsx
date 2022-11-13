import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';

export const Carousel = ({ title, pagination, ...props }) => {
  const arrowsClass = props.arrowsPlacement === 'top' ? 'arrowsTop' : 'arrowsMiddle';

  const settings = {
    dots: pagination ? true : false,
    arrows: props.showArrows ? true : false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={['carousel', arrowsClass].join(' ')}>
      <div className="carousel-top">
        <h2>{title}</h2>
      </div>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          <div className="slick-slide">
            <h3>1</h3>
          </div>
          <div className="slick-slide">
            <h3>2</h3>
          </div>
          <div className="slick-slide">
            <h3>3</h3>
          </div>
          <div className="slick-slide">
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  pagination: PropTypes.bool,
  title: PropTypes.string,
  showArrows: PropTypes.bool,
  arrowsPlacement: PropTypes.string
};