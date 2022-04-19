import React, { Fragment } from "react";
import { Table } from "antd";
import { withRouter } from "react-router-dom";;

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
];

const Tables = (props) => {
  return (
    <Fragment>
      <Table
        onRow={(pro, column, index) => {
          return {
            onClick: (e)=>{ props.history.push({pathname:'/goods',state:{info:pro.full_name}})},
          };
        }}
        columns={columns}
        dataSource={props.data}
      />
    </Fragment>
  );
};
export default withRouter(Tables);
