import React from "react";
import "./Menu.module.scss";
import { Icon } from "../Icons/Icon";
import { Link } from "react-router-dom";

/**
 * @typedef MenuItem
 * @property {string} text
 * @property {string} icon
 * @property {string} route
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
      {items.map(({ icon, text, selected, route = "/" }, idx) => (
        <li
          key={`menu_${kind}_${idx}`}
          className={`menuItem${selected ? " _selected" : ""}`}
        >
          <Link to={route}>
            <Icon type={icon} />
            <span className="menuItemText">{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
