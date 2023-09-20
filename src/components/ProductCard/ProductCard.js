import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './product-card.scss';

export const ProductCard = ({ gallery, ...props }) => {

  const [activeColor, setActiveColor] = useState('');
  const [activeSize, setActiveSize] = useState('');

  useEffect(() => {
    if (activeColor === '') {
      setActiveColor(props.options.color[0])
    }
  }, [activeColor])

  const activeGallery = useMemo(() => {
    return gallery[activeColor];
  }, [gallery, activeColor])

  const renderSwatches = () => {
    const colorOptions = props.options.color && props.options.color.length > 0;

    if (colorOptions) {
      return (
        <div className="product-card__swatches">
          {props.options.color.map((color, idx) => {
            return <button
            className={`swatch color--${color} ${color === activeColor ? 'active' : ''}`}
            key={idx}
            onClick={() => setActiveColor(color)}></button>
          })}
        </div>
      )
    }
  }

  const renderSizes = () => {
    const sizeOptions = props.options.size && props.options.size.length > 0;

    if (sizeOptions) {
      return (
        <div className="product-card__sizes">
          {props.options.size.map((size, idx) => {
            return <button
            key={idx}
            className={`${size === activeSize ? 'active' : ''}`}
            onClick={() => setActiveSize(size)}>
              {size}
            </button>
          })}
        </div>
      )
    }
  }

  const settings = {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: true,
    autoplay: true
  };

  const renderSwiper = () => {
    return (
      <div className="product-card__swiper">
        <Swiper
          {...settings}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            {renderSlides()}
        </Swiper>
      </div>
    )
  }

  const renderSlides = () => {
    if (activeGallery && activeGallery.length > 0) {
      return activeGallery.map((slide, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img loading="lazy" src={slide} alt="Slide" />
          </SwiperSlide>
        );
      });
    }
  }

  return (
    <div className="storybook-wrapper">
      <div className="product-card">
        <div className="product-card__wrapper">
          <div className="product-card__media">
            {renderSwiper()}
          </div>
          <div className="product-card__options">
            {renderSwatches()}
            {renderSizes()}
          </div>
          <div className="product-card__details">
            <div className="product-card__title">
              {props.title}
            </div>
            <div className="product-card__price">
              {props.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  options: PropTypes.object,
  gallery: PropTypes.object
};