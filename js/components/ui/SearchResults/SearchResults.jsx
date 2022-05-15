import React from "react";
import "./SearchResults.module.scss";
import { MainTitle, SecondaryText } from "../Typography/Typography";

/**
 * @typedef SearchResultsPropsType
 * @property {JSX.Element | string} children
 * @property {string} count
 * @property {string} title
 */

/**
 *
 * @param {SearchResultsPropsType} props
 * @returns {JSX.Element}
 */
export const SearchResults = ({ count, title, children }) => {
  return (
    <div className="SearchResults">
      <div className="SearchResultsHeader">
        <MainTitle>{title}</MainTitle>
        <SecondaryText>{count}</SecondaryText>
      </div>
      <div className="SearchResultsItems">{children}</div>
    </div>
  );
};
