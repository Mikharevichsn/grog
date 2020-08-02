import React, { useState, useEffect } from "react";
import { BASIC_FETCH_UL_CLASS, FETCH_URL_JSON_SERVER } from "../../constants";


// Сделайте запрос в базу данных localhost:3001/posts
// Отрендерите каждый пост в формате ul>li
// Например "Автор: Вася, title: привет"

export function BasicFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(FETCH_URL_JSON_SERVER)
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <ul className={BASIC_FETCH_UL_CLASS}>
        {data &&
          data.map((item) => {
            return (
              <li>
                Автор: {item.author}, title: {item.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default BasicFetch;
