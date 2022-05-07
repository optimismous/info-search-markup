import React from "react";
import "./SelectInput.module.scss";

/**
 * @typedef SelectInputOption
 * @property {string} text
 * @property {string} value
 */

/**
 * @typedef PropType
 * @property {string} value
 * @property {Array<SelectInputOption>} options
 * @callback onChange
 * @param {string} value
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

const noop = () => {};

/* @deprecated use react-select directly  */
export const SelectInput = ({ options = [], value = "", onChange = noop }) => {
  return (
    <select>
      {options.map((option) => (
        <option value={option.text}>{}</option>
      ))}
    </select>
  );
};
