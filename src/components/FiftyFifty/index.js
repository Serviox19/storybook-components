import React from 'react';
import PropTypes from 'prop-types';
import './fifty-fifty.scss';

import { Button } from '../Button/Button.jsx';

export const FiftyFifty = (
  {
    title,
    description,
    imageUrl,
    imagePosition,
    ...props
  }) => {

  const buttonStyle = props.buttonStyle === 'primary' ? true : false;
  const imageReverse = imagePosition === 'right' ? 'reverse' : null;

  return (
    <div className="fifty-fifty">
      <div className={['fifty-fifty__wrapper', imageReverse].join(' ')}>
        <div className="fifty-fifty__image">
          <img className="lazy" src={imageUrl} alt={title} />
        </div>
        <div className="fifty-fifty__content">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <Button primary={buttonStyle} label={props.buttonText} />
        </div>
      </div>
    </div>
  )
}

FiftyFifty.propTypes = {
  imagePosition: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string
}