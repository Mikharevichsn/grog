import React, { useState, useEffect } from "react";
import { FETCH_URL_JSON_SERVER, EXAMPLE_CLASS } from "../../constants";

// Пример задания: сделайте запрос по ручке(FETCH_URL_JSON_SERVER)
// Отрисуйте пришедшее имя в формате "Имя: Вася"(EXAMPLE_CLASS)

const Example = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(FETCH_URL_JSON_SERVER + "1")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, [setData]);

  return <div className={EXAMPLE_CLASS}>{data && `Имя: ${data.author}`}</div>;
};

export default Example;
