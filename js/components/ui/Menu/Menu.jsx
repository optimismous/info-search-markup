import React from "react";
import "./Menu.module.scss";
import { Icon } from "../Icons/Icon";

/**
 * @typedef MenuItem
 * @property {string} text
 * @property {string} icon
 * @property {boolean} selected?
 *
 */

/**
 * @typedef PropType
 * @property {Array<MenuItem>} items
 * @property {'horizontal' | 'vertical'} kind
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const Menu = ({ items = [], kind = "vertical" }) => {
  return (
    <ul className={`menu _${kind}`}>
      {items.map(({ icon, text, selected }) => (
        <li className={`menuItem${selected ? " _selected" : ""}`}>
          <a href="#">
            <Icon type={icon} />
            <span className="menuItemText">{text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
