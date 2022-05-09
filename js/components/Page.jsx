import React from "react";
import "./Page.module.css";
import { Logo } from "./ui/Logo/Logo";
import { Menu } from "./ui/Menu/Menu";

const sidebarMenuItems = [
  {
    icon: "person",
    text: "Личный кабинет",
    selected: true,
  },
  {
    icon: "talk",
    text: "Написать в техподдержку",
  },
  {
    icon: "book",
    text: "Справочник пользователей",
  },
  {
    icon: "shield",
    text: "Сторожевой лист",
  },
];

const topMenuItems = [
  {
    icon: "person",
    text: "Личный кабинет",
  },
  {
    icon: "door",
    text: "Выйти",
  },
];

/**
 * @typedef PropType
 * @property {JSX.Element | string} children
 */

/**
 * @param {PropType} props
 * @returns {JSX.Element}
 * @constructor
 */

export function Page({ children }) {
  return (
    <div className="Page">
      <div className="PageSidebar">
        <Logo style={{ position: "relative", left: "-13px" }} />
        <Menu items={sidebarMenuItems} kind="vertical" />
        <div className="CopyrightText AdditionalInfoText">
          &#169; Дельфин-онлайн, 2022
        </div>
      </div>
      <div className="PageMain">
        <div className="PageTopMenu">
          <Menu items={topMenuItems} kind="horizontal" />
        </div>
        <div className="PageContent">{children}</div>
      </div>
    </div>
  );
}
