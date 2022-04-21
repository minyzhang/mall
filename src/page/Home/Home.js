import React, { useState, Fragment } from "react";
import { Button, Modal } from "antd";
import { connect } from "react-redux";
import Table from "../../component/index";
import { getList } from "../../service/request";
import depot from "../../action/index";
// import store from "../../store";

function App(props) {
  const [username, setUsername] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addName = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    getList(username).then((resp) => {
      setUsername("");
      setIsModalVisible(false);
      props.depot(resp.data);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const data = props.arr.map((item) => ({
    key: item.id,
    name: item.name,
    full_name: item.full_name,
    address: item.html_url,
  }));

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
      <Table data={data} {...props} />
    </Fragment>
  );
}

export default connect((res) => ({ ...res.depotData }), { depot })(App);
