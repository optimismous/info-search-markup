import React from "react";
import "./Icon.module.scss";

/**
 * @typedef PropType
 * @property {React.CSSProperties} style
 * @property {('book'|'door'|'envelope'|'person'|'shield'|'talk'|'search'|'trash'|'bell'|'close')} type
 * @property {string} modifier
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const Icon = ({ style = {}, type, modifier = "" }) => {
  return <span style={style} className={`Icon _${type} ${modifier}`} />;
};
