import React from "react";
import "./InfoBox.module.scss";

/**
 * @typedef InfoItemType
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} date
 * @property {boolean} hasAccess
 */

/**
 * @typedef PropType
 * @property {InfoItemType} item
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const InfoBox = ({ item = {} }) => {
  return (
    <div key={`item-${item.id}`} className="InfoBox">
      <h3 className="InfoBoxTitle">{item.name}</h3>
      <div className="InfoBoxDescription">{item.description}</div>
      <div className="InfoBoxFooter">
        <div className={`InfoBoxAccess ${item.hasAccess ? " _green" : ""}`}>
          <span
            className={`InfoBoxAccessCircle ${item.hasAccess ? " _green" : ""}`}
          />
          {item.hasAccess ? "Доступен" : "Недоступен"}
        </div>
        <div className="InfoBoxDate">{item.date}</div>
      </div>
    </div>
  );
};
