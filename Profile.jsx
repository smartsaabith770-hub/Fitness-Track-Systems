import { useState } from "react";
import "./Profile.css";

function Profile({ goToDashboard }) {
  const [name, setName] = useState(
    localStorage.getItem("userName") ||
      "Fitness User"
  );

  const [email, setEmail] = useState(
    localStorage.getItem("userEmail") ||
      "user@example.com"
  );

  const [age, setAge] = useState(
    localStorage.getItem("userAge") || ""
  );

  const [height, setHeight] = useState(
    localStorage.getItem("userHeight") || ""
  );

  const [weight, setWeight] = useState(
    localStorage.getItem("userWeight") || ""
  );

  const [saved, setSaved] = useState(false);

  const saveProfile = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userAge", age);
    localStorage.setItem("userHeight", height);
    localStorage.setItem("userWeight", weight);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <button onClick={goToDashboard}>
          ← Dashboard
        </button>

        <h1>My Profile</h1>

        <p>
          Manage your personal fitness information.
        </p>
      </div>

      <div className="profile-container">
        <div className="profile-avatar">
          👤
        </div>

        <div className="profile-form">
          <label>Full Name</label>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Age</label>

          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
          />

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

          <button
            className="save-profile"
            onClick={saveProfile}
          >
            Save Profile
          </button>

          {saved && (
            <p className="profile-saved">
              Profile saved successfully ✓
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;