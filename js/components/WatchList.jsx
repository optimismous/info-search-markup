import React from "react";
import { FieldValueText } from "./ui/Typography/Typography";
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
        <div className="WatchListItem">
          <div className="WatchListItemInner">
            <div className="WatchListItemBody">
              <FieldValueText field="" value="Грибанов Алексей Александрович" />
              <FieldValueText
                field="Дата внесения: "
                value="01.01.1952, 20:12:10"
              />
              <FieldValueText field="Зафиксировано запросов: " value="1" />
            </div>
            <div className="WatchListItemFooter">
              <span className="StyledLink _blue">
                <Icon style={{ marginRight: 8 }} type="trash" />
                Убрать из листа
              </span>
              <span className="WatchListItemBell">
                <Icon type="bell" modifier="_red" />
                <span className="WatchListItemBellCount">1</span>
              </span>
            </div>
          </div>
          <div className="WatchListItemNotification">
            <div className="WatchListItemNotificationMessage">
              Изменился адрес жительства
            </div>
            <Icon type="close" />
          </div>
        </div>
        <div className="WatchListItem">
          <div className="WatchListItemInner">
            <div className="WatchListItemBody">
              <FieldValueText field="" value="Грибанов Алексей Александрович" />
              <FieldValueText
                field="Дата внесения: "
                value="01.01.1952, 20:12:10"
              />
              <FieldValueText field="Зафиксировано запросов: " value="1" />
            </div>
            <div className="WatchListItemFooter">
              <span className="StyledLink _blue">
                <Icon style={{ marginRight: 8 }} type="trash" />
                Убрать из листа
              </span>
              <span className="WatchListItemBell">
                <Icon type="bell" modifier="_red" />
                <span className="WatchListItemBellCount">1</span>
              </span>
            </div>
          </div>
        </div>
      </SearchResults>
    </div>
  );
};
