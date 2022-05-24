import { Space, Spin } from "antd";

const App = () => (
  <div
    style={{
      width: "5vw",
      height: "80vh",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div>
);

// const {data} = await axios.get("...url//", {headers:{"Authorization":`Bearer ${token}`}})
export default App;
