import React from "react";

export default function DetailBtn(props) {
  return (
    <button
      type="button"
      style={{ margin: "10px 0" }}
      onClick={() => {
        props.history.goBack();
      }}
    >
      返回
    </button>
  );
}
