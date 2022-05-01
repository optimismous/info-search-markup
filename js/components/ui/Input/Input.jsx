import React from 'react';
import './Input.module.css';

/**
 * @typedef PropType
 * @property {string} type
 * @property {string} value
 * @property {Function} onChange
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */
export const Input = (props) => {

  return (
    <input onChange={props.onChange} type={props.type ?? 'text'} className="Input" value={props.value}/>
  );
};
