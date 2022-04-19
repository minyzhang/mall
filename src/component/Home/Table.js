import React from "react";
import { Table, Button } from "antd";
import axios from "axios";
// import {Route,NavLink} from 'react-router-dom'

const columns = [
  {
    title: "github名字",
    dataIndex: "full_name",
  },
  {
    title: "仓库名",
    dataIndex: "name",
  },
  {
    title: "gitHub Address",
    dataIndex: "address",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (props) => (
      <Button
        type="primary"
        onClick={(e) => {
          console.log(props)
          axios.get(`https://api.github.com/repos/${props.full_name}/contents`).then((resp) => {
            console.log(resp);
          });
          props.history.push('/goods')
        }}
      >
        Search
      </Button>
    ),
  },
];

export default function table(props) {
  console.log(props)
  return <Table columns={columns} dataSource={props.data} />;
}
