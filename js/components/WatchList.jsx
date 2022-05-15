import React from "react";
import { FieldValueText } from "./ui/Typography/Typography";
import { ResultBox } from "./ui/ResultBox/ResultBox";
import "./WatchList.module.scss";
import { SearchResults } from "./ui/SearchResults/SearchResults";
import { Icon } from "./ui/Icons/Icon";

/**
 * @typedef WatchListPropsType
 * @property {JSX.Element | text} children
 */

/**
 *
 * @param {WatchListPropsType} props
 * @returns {JSX.Element}
 */
export const WatchList = (props) => {
  return (
    <div>
      <SearchResults count="Организаций добавлено: 2" title="Сторожевой лист">
        <ResultBox>
          <FieldValueText field="" value="Грибанов Алексей Александрович" />
          <FieldValueText
            field="Дата внесения: "
            value="01.01.1952, 20:12:10"
          />
          <FieldValueText field="Зафиксировано запросов: " value="1" />
          <div className="ResultBoxActions">
            <span className="StyledLink _blue">
              <Icon type="trash" />
              Убрать из листа
            </span>
          </div>
        </ResultBox>
      </SearchResults>
    </div>
  );
};
