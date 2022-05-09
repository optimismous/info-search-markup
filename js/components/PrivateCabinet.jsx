import React from "react";
import "./PrivateCabinet.module.scss";
import { Icon } from "./ui/Icons/Icon";
import { InfoBox } from "./ui/InfoBox/InfoBox";

/**
 * @typedef PropType
 * @property {JSX.Element | string} children
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

const modulesList = [
  {
    id: "1",
    name: "СБС",
    description: "Модуль с данными по банковским счетам",
    date: "Загружено с 01.01.2020 по 01.01.2021",
    hasAccess: true,
  },
  {
    id: "2",
    name: "РФПИ",
    description: "Модуль с данными по физическим лицам",
    date: "Загружено с 01.01.2020 по 01.01.2021",
    hasAccess: false,
  },
  {
    id: "3",
    name: "Автозалог",
    description: "Модуль с данными по залогам автотранспорта",
    date: "Загружено с 01.01.2020 по 01.01.2021",
    hasAccess: false,
  },
  {
    id: "4",
    name: "Янтарь",
    description: "Модуль с данными по телефонам",
    date: "Загружено с 01.01.2020 по 01.01.2021",
    hasAccess: true,
  },
  {
    id: "5",
    name: "Недвижимость",
    description: "Модуль с данными по объектам недвижимости",
    date: "Загружено с 01.01.2020 по 01.01.2021",
    hasAccess: true,
  },
  {
    id: "6",
    name: "Транспорт",
    description: "Модуль с данными по транспортным средствам",
    date: "Загружено с 01.01.2020 по 01.01.2021",
    hasAccess: true,
  },
];

export const PrivateCabinet = () => {
  return (
    <>
      <div key="" className="personalInfo">
        <div>Иванов Иван Иванович</div>
        <div className="personalInfoContact">
          <Icon style={{ marginRight: "4px" }} type="envelope" />
          ivanov1991@yandex.ru
        </div>
      </div>
      <div className="modulesList">
        {modulesList.map((item) => (
          <InfoBox key={`key-${item.id}`} item={item} />
        ))}
      </div>
    </>
  );
};
