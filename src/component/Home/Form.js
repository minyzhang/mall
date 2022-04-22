import React from "react";

export default function Form(props) {
  return (
    <form>
      <input
        type="text"
        value={props.username}
        onChange={props.onChange}
        placeholder="GitHub username"
        required
      />
    </form>
  );
}
