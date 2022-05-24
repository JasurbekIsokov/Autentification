import { useState } from "react";
import axios from "axios";

const Demo = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(login, pass);

    try {
      const { data } = await axios.post(
        "https://pwcontrol.herokuapp.com/api/users/login",
        {
          userName: login,
          password: pass,
        }
      );
      console.log(data);
      localStorage.setItem("loginData", JSON.stringify(data));
      window.location.reload("/susses");
    } catch (error) {
      alert(error.massage);
    }
  };

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <input
        className="login"
        type={"text"}
        placeholder="Login..."
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        className="pass"
        type={"password"}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="submit_btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Demo;
