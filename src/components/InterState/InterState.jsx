import React, { useState } from "react";
import { BUTTON_CLASS, DIV_CLASS, INPUT_CLASS } from "../../constants";

// Создайте input в который можно вводить текст
// Создайте кнопку после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился как отдельное
// слово, окруженное своим индексом

const InterState = (props) => {
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);

  return (
    <>
      <input
        className={INPUT_CLASS}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className={BUTTON_CLASS}
        onClick={() => setWords((state) => [...state, input])}
      >
        Добавить
      </button>
      {words &&
        words.map((item, i) => {
          return (
            <div className={DIV_CLASS}>
              {i}
              {item}
              {i}
            </div>
          );
        })}
    </>
  );
};

export default InterState;
