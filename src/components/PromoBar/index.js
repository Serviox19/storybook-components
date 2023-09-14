import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './promo-bar.scss';

export const PromoBar = ({ ...props }) => {

  console.log(props);

  const settings = {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: false,
    autoplay: true
  };

  const navList = [
    {
      dir: 'prev',
      icon: '/icons/chevron-left.svg',
      props: {
        'aria-label': 'Go to previous slide',
      },
    },
    {
      dir: 'next',
      icon: '/icons/chevron-right.svg',
      props: {
        'aria-label': 'Go to next slide',
      },
    },
  ];

  const renderSwiper = () => {
    return (
      <div className="promo-bar__swiper">
        <Swiper
          {...settings}
          modules={[Navigation]}
          navigation={{
            nextEl: '.promo-bar__slider-nav.nav--next',
            prevEl: '.promo-bar__slider-nav.nav--prev'
          }}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {props.slides.length > 0 ? renderSlides() : null}
        </Swiper>
        {navList.map((navItem) =>
          <div className={`promo-bar__slider-nav nav--${navItem.dir}`}>
            <img src={navItem.icon} alt={navItem.props["aria-label"]} />
          </div>
        )}
      </div>
    )
  }

  const renderSlides = () => {
    return props.slides.map(slide => {
      return (
        <SwiperSlide key={slide.text}>
          <a href={slide.link ? slide.link : ''}>{ slide.text }</a>
        </SwiperSlide>
      )
    })
  }

  return (
    <div className="promo-bar" style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : '#CDDC39' }}>
      <div className="promo-bar__wrapper">
        <div className="left-slot">
          <h2>Test</h2>
        </div>
        <div className="middle-slot">
          {renderSwiper()}
        </div>
        <div className="right-slot">
          <h2>Location</h2>
        </div>
      </div>
    </div>
  );
};

PromoBar.propTypes = {
  backgroundColor: PropTypes.string
}