import "./Result.css";

function Result() {

  return (
    <div className="result-page">

      <div className="top-title">
        SMART DOCUMENT FORGERY DETECTION SYSTEM
      </div>

      <h1>3. RESULT PAGE</h1>

      <div className="result-box">

        <div className="tick">
          ✔
        </div>

        <h2>DOCUMENT IS ORIGINAL</h2>

        <p>Document Name : Aadhaar_Card.pdf</p>
        <p>Status : Original</p>
        <p>Confidence : 97.45%</p>

      </div>

    </div>
  );
}

export default Result;