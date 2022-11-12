import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ primary, borderColor, placeholder, full, ...props }) => {
  const type = primary ? 'input--primary' : 'input--secondary';
  const size = full ? 'input--full' : '';
  const actionVisibility = primary || full ? 'hide' : null;
  const showBorderRight = !props.actionText ? 'input--border-right' : '';

  return (
    <div className="input-group">
      <input
        className={['input', type, size, showBorderRight].join(' ')}
        style={borderColor && { borderColor }}
        placeholder={placeholder}
      />
      <span className={['input-group--addon', actionVisibility, !props.actionText ? 'hide' : null].join(' ')}>
        <button
          className={['button', props.actionText ? 'show' : ''].join(' ')}
          style={{ 'backgroundColor': props.actionButtonBg }}>
          {props.actionText}
        </button>
      </span>
    </div>
  );
}

Input.propTypes = {
  primary: PropTypes.bool,
  borderColor: PropTypes.string,
  placeholder: PropTypes.string,
  full: PropTypes.bool,
  actionText: PropTypes.string
};

Input.defaultProps = {
  primary: false,
  borderColor: '#d9d9d9',
  placeholder: 'Type Text',
  full: false,
  actionText: 'Search'
};