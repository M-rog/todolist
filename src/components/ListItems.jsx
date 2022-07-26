import React from "react";

function ListItems(props) {
  return (
    <li
      onClick={() => {
        props.onClicked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ListItems;

