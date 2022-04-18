import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: 'github名字',
    dataIndex: 'Gname',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
  },
  {
    title: 'gitHub Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    avatar: 'avatar-url',
    Gname:'loginname',
    address: 'New York No. 1 Lake Park',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
function App(pagination, filters, sorter, extra) {
  return (<Table columns={columns} dataSource={data} onChange={onChange} />)
}

export default App;
