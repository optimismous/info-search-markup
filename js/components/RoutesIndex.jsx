import React from "react";
import { Link } from "react-router-dom";

/**
 * @typedef PropType
 * @property {JSX.Element | text} children
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */
export const RoutesIndex = (props) => {
  return (
    <nav>
      <div>
        <Link to="/">Авторизация</Link>
      </div>
      <div>
        <Link to="/private-cabinet">Личный кабинет</Link>
      </div>
      <div>
        <Link to="/rfpi">РФПИ</Link>
      </div>
      <div>
        <Link to="/sbs-details">CБС подробнее</Link>
      </div>
    </nav>
  );
};
