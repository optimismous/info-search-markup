import React from "react";
import "./Button.module.css";

/**
 * @typedef PropType
 * @property {string} type
 * @property {string} backgroundColor
 * @property {JSX.Element | string} children
 * @property {Function} onClick
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */
export const Button = (props) => {
  const onClick = props.onClick ?? (() => {});
  const style = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};

  return (
    <button
      style={style}
      type={props.type ?? "button"}
      onClick={onClick}
      className="Button"
    >
      {props.children}
    </button>
  );
};
