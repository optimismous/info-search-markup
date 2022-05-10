import React from "react";
import "./SbsDetails.module.scss";
import { ResultBox } from "./ui/ResultBox/ResultBox";
import { FieldValueText } from "./ui/Typography/Typography";
import { Button } from "./ui/Button/Button";

/**
 * @typedef SbsDetailsPropsType
 * @property {JSX.Element | string} children
 */

/**
 *
 * @param {SbsDetailsPropsType} props
 * @returns {JSX.Element}
 */

export const SbsDetails = (props) => {
  return (
    <div className="BoxesList">
      <ResultBox
        footerItems={
          <Button additionalCssClass="_addToList">
            Добавить в сторожевой лист
          </Button>
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
      <ResultBox expandTitle="Показать запросы" collapseTitle="Скрыть запросы">
        <>
          <table className="RequestsTable" cellPadding="0" cellSpacing="0">
            <tr>
              <th>Дата</th>
              <th>ФИО</th>
              <th>Организация</th>
            </tr>
            <tr>
              <td>01.01.2020</td>
              <td>Иванов Иван Иванович</td>
              <td>ООО «Озёрки»</td>
            </tr>
            <tr>
              <td>01.01.2020</td>
              <td>Иванов Иван Иванович</td>
              <td>ООО «Озёрки»</td>
            </tr>
            <tr>
              <td>01.01.2020</td>
              <td>Иванов Иван Иванович</td>
              <td>ООО «Озёрки»</td>
            </tr>
            <tr>
              <td>01.01.2020</td>
              <td>Иванов Иван Иванович</td>
              <td>ООО «Озёрки»</td>
            </tr>
            <tr>
              <td>01.01.2020</td>
              <td>Иванов Иван Иванович</td>
              <td>ООО «Озёрки»</td>
            </tr>
            <tr>
              <td>01.01.2020</td>
              <td>Иванов Иван Иванович</td>
              <td>ООО «Озёрки»</td>
            </tr>
          </table>
        </>
      </ResultBox>
    </div>
  );
};
