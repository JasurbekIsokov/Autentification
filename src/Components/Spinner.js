import { Space, Spin } from "antd";

const App = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

// const {data} = await axios.get("...url//", {headers:{"Authorization":`Bearer ${token}`}})
export default App;
