import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './zoom.scss';

export const Zoom = ({ gallery, ...props }) => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    console.log(zoom);
  }, [zoom])

  const settings = {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    draggable: true,
    autoplay: true
  };

  const renderSwiper = () => {
    return (
      <div className={`zoom__swiper ${zoom === true ? 'zoom-active' : ''}`}>
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
    );
  }

  const renderSlides = () => {
    if (gallery && gallery.length > 0) {
      return gallery.map((element, idx) => {
        return (
          <SwiperSlide key={idx} onClick={() => setZoom(!zoom)}>
            <img loading="lazy" src={element.src} alt={element.alt} />
          </SwiperSlide>
        )
      });
    }
  }

  return (
    <div style={{ maxWidth: "46.25rem", paddingTop: "2rem" }}>
      <div className="zoom">
        {renderSwiper()}
      </div>
    </div>
  )
};

Zoom.propTypes = {
  zoom: PropTypes.string,
}