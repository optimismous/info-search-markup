import React from "react";
import "./SbsDetails.module.scss";
import { ResultBox } from "./ui/ResultBox/ResultBox";
import { FieldValueText } from "./ui/Typography/Typography";
import { Button } from "./ui/Button/Button";

/**
 * @typedef PropType
 * @property {JSX.Element | string} children
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const SbsDetails = (props) => {
  return (
    <div className="BoxesList">
      <ResultBox
        footerItems={
          <Button backgroundColor="#57a7b2">Добавить в сторожевой лист</Button>
        }
      >
        <>
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
        </>
      </ResultBox>
      <ResultBox expandTitle="Показать счета" collapseTitle="Скрыть счета">
        <>
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
          <FieldValueText
            field="Организация: "
            value="Национальная служба экономической разведки"
          />
          <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
          <FieldValueText field="Телефон: " value="+7-157-847-0256" />
        </>
      </ResultBox>
    </div>
  );
};
