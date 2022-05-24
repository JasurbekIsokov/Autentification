const Demo = () => {
  return (
    <form className="login_form">
      <input className="login" type={"text"} placeholder="Login..." />
      <input className="pass" type={"password"} placeholder="Password" />
      <button className="submit_btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Demo;
