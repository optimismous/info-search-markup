import React, { useCallback, useState } from "react";
import "./ui/Form.scss";
import { FieldValueText, MainTitle } from "./ui/Typography/Typography";
import Select from "react-select";
import { Button } from "./ui/Button/Button";
import { Input } from "./ui/Input/Input";
import { ResultBox } from "./ui/ResultBox/ResultBox";
import { SearchResults } from "./ui/SearchResults/SearchResults";

const options = [
  { value: "organization", label: "Организация" },
  { value: "fio", label: "ФИО" },
];

const SearchByFioFields = () => {
  return (
    <>
      <fieldset className="FormFieldSet">
        <Input placeholder="Фамилия" required={true} />
        <Input placeholder="Имя" required={true} />
        <Input placeholder="Отчество" required={true} />
        <Input placeholder="Дата рождения" required={true} />
      </fieldset>
      <fieldset className="FormFieldSet _wide">
        <textarea className="FormTextarea" placeholder="Причина запроса" />
      </fieldset>
    </>
  );
};

/**
 * @typedef SearchPropsType
 * @property {JSX.Element | string} children
 */

/**
 *
 * @param {SearchPropsType} props
 * @returns {JSX.Element}
 */

export const Search = (props) => {
  const [selectedOption, setSelectedOption] = useState(options?.[0] ?? null);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

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
        {selectedOption.value === "fio" ? (
          <>
            <hr />
            <SearchByFioFields />
          </>
        ) : (
          <fieldset className="FormFieldSet">
            <Input placeholder="Название" />
          </fieldset>
        )}
        <footer className="FormFooter">
          <Button type="submit">найти</Button>
        </footer>
      </form>
      <SearchResults title="Результаты поиска" count="Найдено: 3">
        <>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <ResultBox>
              <>
                <FieldValueText
                  field="Организация: "
                  value="Национальная служба экономической разведки"
                />
                <FieldValueText field="ФИО: " value="Иванов Иван Иванович" />
                <FieldValueText field="Телефон: " value="+7-157-847-0256" />
              </>
            </ResultBox>
          ))}
        </>
      </SearchResults>
    </div>
  );
};
