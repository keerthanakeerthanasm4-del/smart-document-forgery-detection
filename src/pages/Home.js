import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="title-box">
       HOME PAGE
      </div>

      <div className="flow-container">

        <div
          className="flow-box"
          onClick={() => navigate("/upload")}
        >
          📤
          <h2>UPLOAD</h2>
          <p>DOCUMENT</p>
        </div>

        <div className="arrow">➜</div>

        <div
          className="flow-box"
          onClick={() => navigate("/analyze")}
        >
          🔍
          <h2>ANALYZE</h2>
          <p>DOCUMENT</p>
        </div>

        <div className="arrow">➜</div>

        <div
          className="flow-box"
          onClick={() => navigate("/result")}
        >
          📄
          <h2>RESULT</h2>
          <p>PAGE</p>
        </div>

      </div>

    </div>
  );
}

export default Home;