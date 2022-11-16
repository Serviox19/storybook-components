import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './accordion.scss';

export const Accordion = ({ borderColor, content, title, ...props }) => {

  const [opened, setOpened] = useState(false);
  const iconClass = opened ? 'opened' : null;

  const icon = () => {
    return (
      <span className="accordion-icon">
        <img className="accordion-icon__img accordion-icon__img--closed" src='/icons/plus.svg' alt="Close Accordion" />
        <img className="accordion-icon__img accordion-icon__img--opened" src='/icons/minus.svg' alt="Open Accordion" />
      </span>
    )
  }

  return (
    <div className={['accordion', iconClass].join(' ')} style={{ "borderColor": borderColor }}>
      <div className="accordion-header" onClick={() => setOpened(!opened)}>
        {title}
        {icon()}
      </div>
      <div className="accordion-content">
        {content}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
}