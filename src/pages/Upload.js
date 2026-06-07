import { useNavigate } from "react-router-dom";
import "./Upload.css";

function Upload() {

  const navigate = useNavigate();

  return (
    <div className="upload-page">

      <div className="top-title">
        SMART DOCUMENT FORGERY DETECTION SYSTEM
      </div>

      <h1>1. UPLOADING DOCUMENT</h1>

      <div className="upload-box">

        <div className="upload-icon">📤</div>

        <h2>Upload Your Document</h2>

        <input type="file" />

        <br /><br />

        <button
          className="next-btn"
          onClick={() => navigate("/analyze")}
        >
          Next: Analyze Document
        </button>

      </div>

    </div>
  );
}

export default Upload;