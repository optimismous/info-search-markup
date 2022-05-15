import React from "react";
import { Link } from "react-router-dom";

/**
 * @typedef RoutesIndexPropsType
 * @property {JSX.Element | string} children
 */

/**
 *
 * @param {RoutesIndexPropsType} props
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
        <Link to="/search">Поиск</Link>
      </div>
      <div>
        <Link to="/sbs-details">CБС подробнее</Link>
      </div>
    </nav>
  );
};
