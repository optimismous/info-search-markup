import React, { useCallback, useState } from "react";
import "./Rfpi.module.scss";
import "./ui/Form.scss";
import { MainTitle } from "./ui/MainTitle/MainTitle";
import Select from "react-select";
import { Button } from "./ui/Button/Button";
import { Input } from "./ui/Input/Input";

const options = [
  { value: "organization", label: "Организация" },
  { value: "fio", label: "ФИО" },
];

/**
 * @typedef PropType
 * @property {JSX.Element | text} children
 */

/**
 *
 * @param {PropType} props
 * @returns {JSX.Element}
 */

export const Rfpi = (props) => {
  const [selectedOption, setSelectedOption] = useState("fio");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log("666001 formValue", e);
    },
    [setSelectedOption]
  );

  return (
    <div>
      <MainTitle>Поиск по базе</MainTitle>
      <form className="Form" onSubmit={onSubmit}>
        <fieldset className="FormFieldSet">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </fieldset>
        <fieldset className="FormFieldSet">
          <Input placeholder="Название" />
        </fieldset>
        <footer className="FormFooter">
          <Button type="submit">найти</Button>
        </footer>
      </form>
    </div>
  );
};
