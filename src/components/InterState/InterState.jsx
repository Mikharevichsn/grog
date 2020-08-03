import React, { useState } from "react";
import { BUTTON_CLASS, DIV_CLASS, INPUT_CLASS } from "../../constants";

// Создайте input(INPUT_CLASS) в который можно вводить текст
// Создайте кнопку(BUTTON_CLASS) после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился в
// каждый отдельный div(DIV_CLASS) как отдельное слово, окруженное своим индексом
// например: 0privet0, 1privet1 и так далее

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
