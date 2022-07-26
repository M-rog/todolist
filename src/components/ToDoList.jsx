import React, { useState } from "react";
import InputArea from "./InputArea";
import ListItems from "./ListItems";

function ToDoList() {
  const [items, setItems] = useState([]);

  function addItem(input) {
    setItems((prevValue) => {
      return [...prevValue, input];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div>
        <InputArea add={addItem} />
      </div>
      <div>
        <ul className="list">
          {items.map((item, index) => {
            return (
              <ListItems
                onClicked={deleteItem}
                key={index}
                id={index}
                text={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;

