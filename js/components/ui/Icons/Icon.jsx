import React from "react";
import "./Icon.module.css";

/**
 * @typedef PropType
 * @property {React.CSSProperties} style
 * @property {'book' | 'door' | 'envelope' | 'person' | 'shield' | 'talk'} type
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const Icon = ({style = {}, type}) => {
  return (
    <span style={style} className={`Icon _${type}`}/>
  );
};
