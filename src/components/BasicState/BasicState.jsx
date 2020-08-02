import React, { useState } from "react";
import { DIV_CLASS, INPUT_CLASS } from "../../constants";

// Создайте input(INPUT_CLASS) в который можно вводить текст
// Затем создайте div(DIV_CLASS) в котором будет отображаться текст из инпута
const BasicState = () => {
  const [data, setData] = useState("");

  return (
    <>
      <input
        className={INPUT_CLASS}
        onChange={(e) => setData(e.target.value)}
      />
      <div className={DIV_CLASS}>{data}</div>
    </>
  );
};

export default BasicState;
