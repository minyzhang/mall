import React, { Fragment, useState } from "react";
import {Button, Modal} from "antd";
import {Table} from '../../component/index'
import axios from "axios";


const App = (props) => {
  // console.log(props)
  const [username, setUsername] = useState("");
  const [useSource, setUseSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addName = () => {
    setIsModalVisible(true);
  };
  const handleOk = (event) => {
    axios.get(`https://api.github.com/users/${username}/repos`).then((resp) => {
      console.log(resp)  
    setUseSource([...resp.data]);
      setUsername("");
      setIsModalVisible(false);
    });
    
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const data = useSource.map((item) => {
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

export default App;
