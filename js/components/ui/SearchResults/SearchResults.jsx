import React from "react";
import "./SearchResults.module.scss";
import { MainTitle, SecondaryText } from "../Typography/Typography";

/**
 * @typedef PropType
 * @property {JSX.Element | string} children
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */
export const SearchResults = ({ children }) => {
  return (
    <div className="SearchResults">
      <div className="SearchResultsHeader">
        <MainTitle>Результаты поиска</MainTitle>
        <SecondaryText>Найдено: 3</SecondaryText>
      </div>
      <div className="SearchResultsItems">{children}</div>
    </div>
  );
};
