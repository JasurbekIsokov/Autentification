import { Result, Button } from "antd";
import "antd/dist/antd.css";
const Susses = () => {
  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button
          key="buy"
          style={{ color: "red" }}
          onClick={() => {
            localStorage.removeItem("loginData");
            window.location.reload();
          }}
        >
          Log out
        </Button>,
      ]}
    />
  );
};
export default Susses;
