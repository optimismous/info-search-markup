import React from "react";
import "./Button.module.scss";

/**
 * @typedef PropType
 * @property {string} type
 * @property {string} additionalCssClass
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
      type={props.type ?? "button"}
      onClick={onClick}
      className={`Button${
        props.additionalCssClass ? ` ${props.additionalCssClass}` : ""
      }`}
    >
      {props.children}
    </button>
  );
};
