import React from "react";
import { Table } from "antd";
import { withRouter } from "react-router-dom";

const columns = [
  {
    title: "fullname",
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
];
// const Tables = );
export default withRouter((props) => (
  <Table
    onRow={(pro) => ({
      onClick: () => (props.history.push({
        pathname: `/detail`,
        state: { info: pro.full_name },
      })),
    })}
    columns={columns}
    dataSource={props.data}
    bordered
  />
));
