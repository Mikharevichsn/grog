import React, { useState } from "react";

// Создайте input в который можно вводить текст
// Затем создайте div в котором будет дублироваться текст из инпута
const BasicState = (props) => {
  const [data, setData] = useState("");

  return (
    <>
      <input className={"input-cy"} onChange={(e) => setData(e.target.value)} />
      <div className="data-cy">{data}</div>
    </>
  );
};

export default BasicState;
