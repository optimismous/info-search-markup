import React from "react";
import "./MainTitle.module.scss";

/**
 * @typedef PropType
 * @property {JSX.Element | text} children
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const MainTitle = ({ children }) => {
  return <h1 className="MainTitle">{children}</h1>;
};
