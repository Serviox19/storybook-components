import React from 'react';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

export const Pagination = ({ ...props }) => {
  const items = [];
  const [page, setPage] = useState(1);
  const paginate = props.paginateBy;
  const pages = Math.ceil((props.itemsCount / props.paginateBy));
  const pageNumbers = [...Array(pages + 1).keys()].slice(1);

  for (var i = 0; i < props.itemsCount; i++) {
    items.push(
      {
        img: `https://picsum.photos/300/400?random=${i + 1}`,
        title: 'Slide Title',
        subtitle: 'Example description for slide'
      }
    )
  }

  const currentPageItems = useMemo(() => items.slice((page - 1) * paginate, (page * paginate)), [page, items, paginate]);

  const renderItems = () => {
    return currentPageItems.map((item, i) => {
      return (
        <div className="item" key={i}>
          <img className="item_image" src={item.img} alt={item.title} />
        </div>
      );
    });
  }

  const renderPagination = () => {
    return pageNumbers.map((pageNum, i) => {
      return (
        <button
          key={i}
          className={`pagination-btn ${pageNum === page ? 'active' : ''}`}
          onClick={() => setPage(pageNum)}>
            {pageNum}
        </button>
      )
    })
  }

  return (
    <div className="section">
      <div className="section-wrapper">
        <div className="items-list">
          {items && items.length > 0 ? renderItems() : null}
        </div>
        <div className="pagination">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  paginateBy: PropTypes.number,
  itemsCount: PropTypes.number,
}