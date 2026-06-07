import { useNavigate } from "react-router-dom";
import "./Analyze.css";

function Analyze() {

  const navigate = useNavigate();

  return (
    <div className="analyze-page">

      <div className="top-title">
                          SMART DOCUMENT FORGERY DETECTION SYSTEM
      </div>

      <h1>2. ANALYZING DOCUMENT</h1>

      <div className="analyze-box">

        <h2>Analyzing Document...</h2>

        <div className="circle">
          100%
        </div>

        <button
          onClick={() => navigate("/result")}
        >
          View Result
        </button>

      </div>

    </div>
  );
}

export default Analyze;