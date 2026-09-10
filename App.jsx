import { useState } from "react";

import Login from "./Login";

import Signup from "./Signup";

import Workout from "./Workout";

import Progress from "./Progress";

import Profile from "./Profile";

import History from "./WorkoutHistory";

import BMI from "./BMI";

import "./App.css";

function Dashboard({

  goToWorkout,

  goToProgress,

  goToProfile,

  goToHistory,

  goToBMI,

  workoutCount,

  caloriesBurned,

}) {

  return (

    <div className="app">

      <nav className="navbar">

        <h2>

          FITNESS<span>TRACK</span>

        </h2>

        <div className="nav-links">

          <a href="#dashboard">Dashboard</a>
    <a

            href="#profile"

            onClick={(e) => {

              e.preventDefault();

              goToProfile();

            }}

          >

            Profile

          </a>
                  <a

            href="#bmi"

            onClick={(e) => {

              e.preventDefault();

              goToBMI();

            }}

          >

            BMI

          </a>
          <a

            href="#workouts"

            onClick={(e) => {

              e.preventDefault();

              goToWorkout();

            }}

          >

            Workouts

          </a>

          <a

            href="#progress"

            onClick={(e) => {

              e.preventDefault();

              goToProgress();

            }}

          >

            Progress

          </a>
          <a

            href="#history"

            onClick={(e) => {

              e.preventDefault();

              goToHistory();

            }}

          >

            History

          </a>

        </div>

      </nav>

      <main className="dashboard" id="dashboard">

        <section className="hero">

          <div className="hero-content">

            <p className="welcome">WELCOME BACK 👋</p>

            <h1>

              Build Your

              <br />

              Best Version.

            </h1>

            <p className="description">

              Track your workouts, monitor your progress,

              and stay consistent with your fitness journey.

            </p>

            <button

              className="start-btn"

              onClick={goToWorkout}

            >

              Start Workout →

            </button>

          </div>

          <div className="hero-card">

            <p>Today's Goal</p>

            <h2>75%</h2>

            <div className="progress-bar">

              <div className="progress-fill"></div>

            </div>

            <span>Keep pushing! 🔥</span>

          </div>

        </section>

        <section className="stats">

          <div className="stat-card">

            <p>Workout Time</p>

            <h2>

              {workoutCount * 1}

              <small> hr</small>

            </h2>

          </div>

          <div className="stat-card">

            <p>Workouts</p>

            <h2>

              {workoutCount}

              <small> this month</small>

            </h2>

          </div>

          <div className="stat-card">

            <p>Current Streak</p>

            <h2>

              {workoutCount}

              <small> days 🔥</small>

            </h2>

          </div>

        </section>

        <section className="workout-section">

          <div className="section-heading">

            <div>

              <p>YOUR PLAN</p>

              <h2>Today's Workout</h2>

            </div>

            <button onClick={goToWorkout}>

              View All →

            </button>

          </div>

          <div className="workout-grid">

            <div className="workout-card">

              <div className="workout-icon">💪</div>

              <h3>Upper Body</h3>

              <p>Push • Pull</p>

              <span>1 hr</span>

            </div>

            <div className="workout-card">

              <div className="workout-icon">🦵</div>

              <h3>Lower Body</h3>

              <p>Legs • Glutes • Calves</p>

              <span>1 hr</span>

            </div>

            <div className="workout-card">

              <div className="workout-icon">🏃</div>

              <h3>Cardio</h3>

              <p>Running • Cycling</p>

              <span>30 min</span>

            </div>

          </div>

        </section>

      </main>

    </div>

  );

}

function App() {

  const [page, setPage] = useState("login");

  const [workoutCount, setWorkoutCount] = useState(() => {

    return Number(localStorage.getItem("workoutCount")) || 0;

  });

  const [caloriesBurned, setCaloriesBurned] = useState(() => {

    return Number(localStorage.getItem("caloriesBurned")) || 0;

  });

  const [history, setHistory] = useState(() => {

    const savedHistory =

      localStorage.getItem("workoutHistory");

    try {

      return savedHistory

        ? JSON.parse(savedHistory)

        : [];

    } catch {

      return [];

    }

  });

  const completeWorkout = () => {

    const newWorkout = {

      id: Date.now(),

      name: "Upper Body Workout",

      duration: "1 hr",

      date: new Date().toLocaleDateString(),

    };

    const updatedWorkoutCount = workoutCount + 1;

    const updatedCalories = caloriesBurned + 50;

    const updatedHistory = [

      newWorkout,

      ...history,

    ];

    setWorkoutCount(updatedWorkoutCount);

    setCaloriesBurned(updatedCalories);

    setHistory(updatedHistory);

    localStorage.setItem(

      "workoutCount",

      String(updatedWorkoutCount)

    );

    localStorage.setItem(

      "caloriesBurned",

      String(updatedCalories)

    );

    localStorage.setItem(

      "workoutHistory",

      JSON.stringify(updatedHistory)

    );

    setPage("progress");

  };

  if (page === "login") {

    return (

      <Login

        goToSignup={() => setPage("signup")}

        goToDashboard={() => setPage("dashboard")}

      />

    );

  }

  if (page === "signup") {

    return (

      <Signup

        goToLogin={() => setPage("login")}

      />

    );

  }

  if (page === "dashboard") {

    return (

      <Dashboard

        goToWorkout={() => setPage("workout")}

        goToProgress={() => setPage("progress")}

        goToProfile={() => setPage("profile")}

        goToHistory={() => setPage("history")}

        goToBMI={() => setPage("bmi")}

        workoutCount={workoutCount}

       

      />

    );

  }

  if (page === "profile") {

    return (

      <Profile

        goToDashboard={() => setPage("dashboard")}

      />

    );

  }

  if (page === "bmi") {

    return (

      <BMI

        goToDashboard={() => setPage("dashboard")}

      />

    );

  }

  if (page === "workout") {

    return (

      <Workout

        goToDashboard={() => setPage("dashboard")}

        onWorkoutComplete={completeWorkout}

      />

    );

  }

  if (page === "progress") {

    return (

      <Progress

        goToDashboard={() => setPage("dashboard")}

        workoutCount={workoutCount}

      />

    );

  }

  if (page === "history") {

    return (

      <History

        goToDashboard={() => setPage("dashboard")}

        history={history}

      />

    );

  }

  return null;

}

export default App;