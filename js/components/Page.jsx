import React from "react";
import "./Page.module.scss";
import { Logo } from "./ui/Logo/Logo";
import { Menu } from "./ui/Menu/Menu";

const sidebarMenuItems = [
  {
    icon: "search",
    text: "Поиск",
    route: "/search",
  },
  {
    icon: "person",
    route: "/private-cabinet",
    text: "Личный кабинет",
  },
  {
    icon: "talk",
    route: "/support",
    text: "Написать в техподдержку",
  },
  {
    icon: "book",
    route: "/users",
    text: "Справочник пользователей",
  },
  {
    icon: "shield",
    route: "/watch-list",
    text: "Сторожевой лист",
  },
];

const topMenuItems = [
  {
    icon: "person",
    route: "/private-cabinet",
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
          <div className="PageTitle">
            СБС <span className="triangle">►</span>
          </div>
          <Menu items={topMenuItems} kind="horizontal" />
        </div>
        <div className="PageContent">{children}</div>
      </div>
    </div>
  );
}
