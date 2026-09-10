import { useState } from "react";
import "./BMI.css";

function BMI({ goToDashboard }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    const heightInMeters =
      Number(height) / 100;

    const weightValue = Number(weight);

    if (
      !heightInMeters ||
      !weightValue ||
      heightInMeters <= 0 ||
      weightValue <= 0
    ) {
      setBmi(null);
      setMessage(
        "Please enter valid height and weight."
      );
      return;
    }

    const result =
      weightValue /
      (heightInMeters * heightInMeters);

    setBmi(result.toFixed(1));

    if (result < 18.5) {
      setMessage("Underweight");
    } else if (result < 25) {
      setMessage("Normal Weight");
    } else if (result < 30) {
      setMessage("Overweight");
    } else {
      setMessage("Obesity");
    }
  };

  return (
    <div className="bmi-page">
      <div className="bmi-header">
        <button onClick={goToDashboard}>
          ← Dashboard
        </button>

        <h1>BMI Calculator ⚖️</h1>

        <p>
          Check your Body Mass Index
        </p>
      </div>

      <div className="bmi-container">
        <div className="bmi-form">
          <label>Height (cm)</label>

          <input
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value)
            }
          />

          <label>Weight (kg)</label>

          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />

          <button onClick={calculateBMI}>
            Calculate BMI
          </button>
        </div>

        <div className="bmi-result">
          {bmi ? (
            <>
              <p>Your BMI</p>

              <h2>{bmi}</h2>

              <div className="bmi-status">
                {message}
              </div>
            </>
          ) : (
            <>
              <div className="bmi-result-icon">
                ⚖️
              </div>

              <h2>Your Result</h2>

              <p>
                {message ||
                  "Enter your details to calculate BMI."}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="bmi-info">
        <h2>BMI Categories</h2>

        <div className="bmi-categories">
          <div>
            <strong>Below 18.5</strong>
            <span>Underweight</span>
          </div>

          <div>
            <strong>18.5 – 24.9</strong>
            <span>Normal Weight</span>
          </div>

          <div>
            <strong>25 – 29.9</strong>
            <span>Overweight</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>Obesity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMI;