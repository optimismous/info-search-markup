import React, { useCallback, useState } from "react";
import "./Auth.module.css";
import { Button } from "./ui/Button/Button";
import { Input } from "./ui/Input/Input";
import { DolphinIcon } from "./ui/Icons/DolphinIcon";
import { Logo } from "./ui/Logo/Logo";
import { Link } from "react-router-dom";

export function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onLoginChange = useCallback(
    (e) => {
      setLogin(e.target.value);
    },
    [setLogin]
  );

  const onPasswordChange = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // todo dispatch login action here
      console.log({ login, password });
    },
    [login, password]
  );

  return (
    <div className="authContainer">
      <div className="authForm">
        <Logo type="big" />
        <div className="AuthFormHeaderWrap">
          <h1 className="AuthFormHeader">Информационно-поисковая система</h1>
          <div className="FormField">
            <DolphinIcon style={{ marginRight: 8 }} /> Дельфин - онлайн
          </div>
        </div>
        <form className="Form" onSubmit={onSubmit}>
          <div className="FormField">
            <Input
              value={login}
              placeholder="Введите логин"
              onChange={onLoginChange}
              type="text"
            />
          </div>
          <div className="FormField">
            <Input
              value={password}
              placeholder="Введите пароль"
              onChange={onPasswordChange}
              type="password"
            />
          </div>
          <div className="FormField">
            <Link to="/routes">
              <Button type="submit">войти</Button>
            </Link>
          </div>
          <div className="AuthFormBottomLinks">
            {" "}
            Вход / <a href="#">Регистрация</a>
          </div>
        </form>
      </div>
    </div>
  );
}
