import React from 'react';
import "./DolphinIcon.module.css";

/**
 * @typedef PropType
 * * @property {React.CSSProperties} style
 *
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const DolphinIcon = (props) => {
 return (
  <span style={props.style ?? {}} className="dolphinIcon" />
 );
};
