import React from "react";
import "./Menu.module.scss";
import { Icon } from "../Icons/Icon";
import { NavLink } from "react-router-dom";

/**
 * @typedef MenuItem
 * @property {string} text
 * @property {string} icon
 * @property {string} route
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
      {items.map(({ icon, text, route = "/" }, idx) => {
        const iconModifier = kind === "horizontal" ? "_red" : "";
        return (
          <li key={`menu_${kind}_${idx}`} className="menuItem">
            <NavLink
              to={route}
              className={({ isActive }) => (isActive ? "_selected" : "")}
            >
              <Icon type={icon} modifier={iconModifier} />
              <span className="menuItemText">{text}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
