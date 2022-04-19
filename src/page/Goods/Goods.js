import React, { useState, useEffect } from "react";
import axios from "axios";

const GoodsList = (props) => {
  const [fileName, setFileName] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${props.location.state.info}/contents`)
      .then((res) => {
        console.log(res);
        setFileName(res.data);
      });
  }, []);
  return (
    <ul>
      {fileName.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </ul>
  );
};

export default GoodsList;
