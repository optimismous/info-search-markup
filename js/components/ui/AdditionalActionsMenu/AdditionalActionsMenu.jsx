import React from "react";
import "./AdditionalActionsMenu.module.scss";

/**
 * @typedef AdditionalActionsMenuPropsType
 * @property {JSX.Element | string} leftElement
 * @property {JSX.Element | string} rightElement
 */

/**
 *
 * @param {AdditionalActionsMenuPropsType} props
 * @returns {JSX.Element}
 */

export const AdditionalActionsMenu = ({
  leftElement = null,
  rightElement = null,
}) => {
  return (
    <div className="AdditionalActionsMenu">
      {leftElement && (
        <div className="AdditionalActionsMenuLeft">{leftElement}</div>
      )}
      {rightElement && (
        <div className="AdditionalActionsMenuRight">{rightElement}</div>
      )}
    </div>
  );
};
