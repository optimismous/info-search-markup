import React from "react";
import "./ResultBox.module.scss";
import { FieldValueText } from "../Typography/Typography";

/**
 * @typedef PropType
 * @property {JSX.Element | text} children
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ResultBox = (props) => {
  return (
    <div className="ResultBox">
      <FieldValueText
        field="Организация: "
        value="Национальная служба экономической разведки"
      />
      <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
      <FieldValueText field="Телефон: " value="+7-157-847-0256" />
    </div>
  );
};
