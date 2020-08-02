import React, { useState, useEffect } from "react";

// Сделайте запрос в базу данных localhost:3001/posts
// Отрендерите каждый пост в формате ul>li
// Например "Автор: Вася, title: привет"

export function BasicFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts/")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <ul className="ul-cy">
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
