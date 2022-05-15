import React from "react";
import { MainTitle } from "./ui/Typography/Typography";
// import "./Users.module.scss";

/**
 * @typedef UsersPropsType
 * @property {JSX.Element | text} children
 */

/**
 *
 * @param {UsersPropsType} props
 * @returns {JSX.Element}
 */
export const Users = (props) => {
  return (
    <div>
      <MainTitle>Пользователи</MainTitle>
    </div>
  );
};
