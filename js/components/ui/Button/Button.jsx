import React from 'react';
import "./Button.module.css";

/**
 * @typedef PropType
 * @property {string} type
 * @property {JSX.Element | text} children
 * @property {Function} onClick
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */
export const Button = (props) => {
  const onClick = props.onClick ?? (() => { });
  return (
    <button type={props.type ?? 'button'} onClick={onClick} className="Button">{props.children}</button>
  );
};
