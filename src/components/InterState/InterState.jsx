import React, { useState } from "react";

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
        className={"input-cy"}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={"button-cy"} onClick={() => setWords((state) => [...state, input])}>
        Добавить
      </button>
      {words &&
        words.map((item, i) => {
          return (
            <div className="item-cy">
              {i}{item}{i}
            </div>
          );
        })}
    </>
  );
};

export default InterState;
