import React, { Fragment, useState } from "react";
import { Button, Modal } from "antd";
import { Table } from "../../component/index";
import { getList } from "../../service/request";
import { connect } from "react-redux";
import { depot } from "../../action/index";
// import store from "../../store";

const App = (props) => {
  const [username, setUsername] = useState("");
  const [useSource, setUseSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addName = () => {
    setIsModalVisible(true);
  };
  const handleOk = (event) => {
    getList(username).then((resp) => {
      // console.log(typeof resp.data);
      // store.dispatch(TypeData())
      setUseSource([...resp.data]);
      setUsername("");
      setIsModalVisible(false);
    props.depot(resp.data);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const data = props.arr.map((item) => {
    return {
      key: item.id,
      name: item.name,
      full_name: item.full_name,
      address: item.html_url,
    };
  });
  

  return (
    <Fragment>
      <Button type="primary" style={{ margin: "10px" }} onClick={addName}>
        搜索
      </Button>
      <Modal
        title="gitHun search"
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
      <Table data={data} {...props}></Table>
    </Fragment>
  );
};

export default connect(
  (res) => {
    return { ...res.depotData };
  },
  { depot }
)(App);
