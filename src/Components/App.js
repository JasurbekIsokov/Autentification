import "antd/dist/antd.css";

// local
import Demo from "./LoginPage";
import "../css/Spinner.css";
import "../css/Login.css";

const App = () => {
  return (
    <div>
      <div className="inputs_section">
        <Demo />
      </div>
    </div>
  );
};

export default App;
