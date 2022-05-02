import React from "react";
import "./Logo.module.css";

/**
 * @typedef PropType
 * @property {'big' | 'middle'} type
 * @property {React.CSSProperties} style
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const Logo = ({ type = "middle", style = {} }) => {
  return <div style={style} className={`Logo _${type}`} />;
};
