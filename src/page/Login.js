import React from "react";
import { Form, Input, Button } from "antd";

const Login = (props) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    props.history.push("/");
    window.localStorage.setItem("login", values.username);
    // console.log(props.history);
  };
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Form
        style={{
          width: "50%",
          height: "300px",
          textAlign: "center",
          position: "absolute",
          lineHeight: "300px",
          top: "50%",
          right: "50%",
          marginTop: "-150px",
          transform: { translateX: "-50%", translateY: "-50%" },
        }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
