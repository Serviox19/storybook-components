import React from 'react';

export const ProductTile = ({ ...props }) => {
  const { img, title, subtitle } = props.data;
  return (
    <div className="product-tile">
      <div className="product-tile__media">
        <img loading="lazy" src={img} alt={title} />
      </div>
      <h3 className="product-tile__title">{title}</h3>
      <p className="product-tile__subtitle">{subtitle}</p>
    </div>
  )
}