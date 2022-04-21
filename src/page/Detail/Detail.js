import React, { useState, useEffect, Fragment } from "react";
import { getInfo } from "../../service/request";

const Detail = (props) => {
  const [fileName, setFileName] = useState([]);

  useEffect(() => {
    getInfo(props.location.state.info).then((res) => {
      // console.log(res);
      setFileName(res.data);
    });
  }, []);
  return (
    <Fragment>
      <button
      style={{ margin:'10px 0',}}
        onClick={() => {
          props.history.goBack();
        }}
      >
        返回
      </button>
      <ul>
        {fileName.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default Detail;
