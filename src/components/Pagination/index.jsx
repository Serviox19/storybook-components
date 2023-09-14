import React from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

export const Pagination = ({ paginateBy, ...props }) => {
  const items = [];
  const count = 24;

  const buildItems = () => {
    for (var i = 0; i < count.length; i++) {
      items.push(
        {
          img: `https://picsum.photos/300/400?random=${i + 1}`,
          title: 'Slide Title',
          subtitle: 'Example description for slide'
        }
      )
    }
  }

  buildItems();

  return (
    <div className="section">
      <div className="section-wrapper">
        <div className="items-list"></div>
        <div className="pagination"></div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  paginateBy: PropTypes.number,
}