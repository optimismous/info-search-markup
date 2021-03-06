import React, { useCallback, useState } from "react";
import "./ResultBox.module.scss";

/**
 * @typedef ResultBoxPropsType
 * @property {JSX.Element | string} children
 * @property {JSX.Element | string} footerItems
 * @property {string} expandTitle
 * @property {string} collapseTitle
 */

/**
 *
 * @param {ResultBoxPropsType} props
 * @returns {JSX.Element}
 */

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ResultBox = ({
  children,
  footerItems = "",
  expandTitle,
  collapseTitle,
}) => {
  const [expanded, setExpanded] = useState(true);
  const onHeaderClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  const triangleRight = <span className="triangle">►</span>;
  const triangleDown = <span className="triangle">▼</span>;

  const header = expandTitle ? (
    <div
      onClick={onHeaderClick}
      className={`ResultBoxHeader${expanded ? "" : " _collapsed"}`}
    >
      {expanded ? (
        <>
          {collapseTitle}
          {triangleDown}
        </>
      ) : (
        <>
          {expandTitle}
          {triangleRight}
        </>
      )}
    </div>
  ) : null;

  return (
    <div className="ResultBox">
      {header}
      {expanded ? (
        <div>
          {children}
          <div className="ResultBoxFooter">{footerItems}</div>
        </div>
      ) : null}
    </div>
  );
};
