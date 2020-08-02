import React, { useState, useEffect } from "react";
const url = "https://swapi.dev/api/planets/1"

// Пример задания: сделайте запрос по ручке(url)

const Example = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, [setData]);

  return <div>{JSON.stringify(data)}</div>;
};

export default Example;
