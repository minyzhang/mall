import React from "react";

export default function Detail(props) {
  return (
    <ul>
      {props.data.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
}
