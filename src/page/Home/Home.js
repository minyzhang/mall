import React, { Fragment, useState } from "react";
import { Table, Button, Modal } from "antd";
import axios from "axios";

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
    dataIndex: "html_url",
  },
];


const App = () => {
  const state = {
    arr: [],
  };
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addName = () => {
    setIsModalVisible(true);
  };
  const handleOk = (event) => {
    axios.get(`https://api.github.com/users/${username}/repos`).then((resp) => {
      // console.log(resp.data);
      setData(resp.data)
      // console.log(state.arr)
      setUsername("");
      setIsModalVisible(false);
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log(data)

  return (
    <Fragment>
      <Button type="primary" onClick={addName}>
        添加
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="GitHub username"
            required
          />
        </form>
      </Modal>
      <Table columns={columns} dataSource={data} />
    </Fragment>
  );
};

export default App;
