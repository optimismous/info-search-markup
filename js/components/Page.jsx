import React from "react";
import "./Page.module.css";
import { Logo } from "./ui/Logo/Logo";
import { Menu } from "./Menu";

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
 *
 * @returns {JSX.Element}
 * @constructor
 */
export function Page() {
  return (
    <div className="page">
      <div className="pageSidebar">
        <Logo style={{ position: "relative", left: "-13px" }} />
        <Menu items={sidebarMenuItems} kind="vertical" />
      </div>
      <div className="pageMain">
        <div className="pageTopMenu">
          <Menu items={topMenuItems} kind="horizontal" />
        </div>
        <div className="pageContent"></div>
      </div>
    </div>
  );
}
