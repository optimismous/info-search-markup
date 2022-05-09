import React, { useCallback, useState } from "react";
import "./ResultBox.module.scss";

/**
 * @typedef PropType
 * @property {JSX.Element | text} children
 * @property {JSX.Element | text} footerItems
 * @property {string} expandTitle
 * @property {string} collapseTitle
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
