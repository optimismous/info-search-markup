import React, { useCallback } from "react";
import { MainTitle } from "./ui/Typography/Typography";
import { Input } from "./ui/Input/Input";
import { Button } from "./ui/Button/Button";

/**
 * @typedef SupportPropsType
 * @property {JSX.Element | text} children
 */

/**
 *
 * @param {SupportPropsType} props
 * @returns {JSX.Element}
 */
export const Support = (props) => {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div>
      <MainTitle>Запрос в поддержку</MainTitle>
      <form className="Form" onSubmit={onSubmit}>
        <fieldset className="FormFieldSet">
          <Input placeholder="Тема запроса" />
        </fieldset>
        <fieldset className="FormFieldSet _wide">
          <textarea className="FormTextarea" placeholder="Ваш запрос" />
        </fieldset>
        <footer className="FormFooter">
          <Button type="submit">отправить</Button>
        </footer>
      </form>
    </div>
  );
};
