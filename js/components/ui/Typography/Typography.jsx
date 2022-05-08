import React from "react";
import "./Typography.module.scss";

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

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */
export const SecondaryText = ({ children }) => {
  return <span className="SecondaryText">{children}</span>;
};

/**
 * @typedef FieldValueTextPropsType
 * @property {string} field
 * @property {string} value
 */

/**
 *
 * @param {FieldValueTextPropsType} props
 * @returns {JSX.Element}
 */
export const FieldValueText = ({ field, value }) => {
  return (
    <div className="KeyValueText">
      <span className="KeyValueTextKey">{field}</span>{" "}
      <span className="KeyValueTextValue">{value}</span>
    </div>
  );
};
