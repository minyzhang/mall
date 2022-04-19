import React from 'react'
import { Table, Button, } from "antd";


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
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button type="primary">Search</Button>,
    },
  ];
  
export default function table(props) {
  return (
    <Table columns={columns} dataSource={props.data} />
  )
}
