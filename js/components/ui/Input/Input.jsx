import React from "react";
import "./Input.module.scss";

/**
 * @typedef PropType
 * @property {string} type
 * @property {string} value
 * @property {string} placeholder
 * @property {'big'} size?
 * @callback onChange
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */
export const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type ?? "text"}
      className={`Input${props.size === "big" ? " _big" : ""}`}
      value={props.value}
    />
  );
};
