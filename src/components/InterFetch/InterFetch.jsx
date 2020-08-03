import React, { useState } from "react";
import { DIV_CLASS, FORM_CLASS, FETCH_URL_JSON_SERVER, INPUT_CLASS } from "../../constants";

// Создай форму(FORM_CLASS) c input(INPUT_CLASS) и сделай запрос методом GET
// по адресу FETCH_URL_JSON_SERVER и параметру author(Вася|Петя|Иннокентий|Маша)
// то есть, чтобы получить инфу о Пете запрос должен выглядеть следующим образом
// fetch(${FETCH_URL_JSON_SERVER}+&author=Вася) и отрендерить полученный результат
// в диве(DIV_CLASS) формате Author: ... Title ...

export default function InterFetch(props) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      <form
        className={FORM_CLASS}
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`${FETCH_URL_JSON_SERVER}?author=` + value)
            .then((resp) => resp.json())
            .then((data) => setResult(data[0]));
        }}
      >
        <input
          name="name"
          className={INPUT_CLASS}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div className={DIV_CLASS}>
        {result && `Author: ${result.author} Title: ${result.title}`}
      </div>
    </>
  );
}
