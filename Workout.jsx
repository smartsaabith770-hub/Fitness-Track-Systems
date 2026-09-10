import { useState } from "react";
import "./Workout.css";

function Workout({
  goToDashboard,
  onWorkoutComplete,
}) {
  const [selectedWorkout, setSelectedWorkout] =
    useState("Upper Body");

  const [completed, setCompleted] =
    useState(false);

  const workouts = [
    {
      name: "Upper Body",
      icon: "💪",
     duration: "2 hr",
      pushExercises: [
        "Machine Shoulder Press",
        "Face Pull(Rope)",
        "Bench Press",
        "Cable Crossover",
        "Skull Crusher",
        "Dumbbell Overhead Extension",
      ],
   
      pullExercises: [
        "Lat Pulldown",
        "Underarm Pulldown",
        "Barbell bent-over row",
        "Standing Barbell",
        "Preacher Curl",
        "Hammer Curl",
      ],
    },
    {
      name: "Lower Body",
      icon: "🦵",
      duration: "1 hr",
      exercises: [
        "Squats",
        "Lunges",
        "Leg Press",
        "Leg Extension",
        "Calf Raises",
        "Romanian Deadlift",
      ],
    },
    {
      name: "Cardio",
      icon: "🏃",
      duration: "30 min",
      exercises: [
        "Treadmill",
        "Cycling",
        "Running",
        "Mountain Climbers",
      ],
    },
  ];

  const currentWorkout = workouts.find(
    (workout) =>
      workout.name === selectedWorkout
  );

  const handleComplete = () => {
    if (completed) return;

    setCompleted(true);

    if (onWorkoutComplete) {
      onWorkoutComplete();
    }
  };

  return (
    <div className="workout-page">
      <nav className="workout-nav">
        <h2>
          FITNESS<span>TRACK</span>
        </h2>

        <button onClick={goToDashboard}>
          ← Dashboard
        </button>
      </nav>

      <main className="workout-container">
        <div className="workout-title">
          <p>TRAINING</p>

          <h1>Today's Workout</h1>

          <span>
            Choose your workout and complete your session.
          </span>
        </div>

        <div className="workout-tabs">
          {workouts.map((workout) => (
            <button
              key={workout.name}
              className={
                selectedWorkout === workout.name
                  ? "active-workout"
                  : ""
              }
              onClick={() => {
                setSelectedWorkout(workout.name);
                setCompleted(false);
              }}
            >
              {workout.icon} {workout.name}
            </button>
          ))}
        </div>

        <div className="selected-workout">
          <div className="selected-workout-header">
            <div>
              <span className="large-icon">
                {currentWorkout.icon}
              </span>

              <h2>{currentWorkout.name}</h2>
            </div>

            <div className="workout-meta">
              
            </div>
          </div>

          {/* UPPER BODY - PUSH & PULL */}
          {selectedWorkout === "Upper Body" ? (
            <>
              <h3>Exercises</h3>

              <div className="push-pull-container">

                {/* LEFT SIDE - PUSH */}
                <div className="push-pull-section">
                  <h3 className="push-title">
                    🔴 PUSH WORKOUTS
                  </h3>
                  
                   
                  <div className="exercise-list">
                    {currentWorkout.pushExercises.map(
                      (exercise, index) => (
                        <div
                          className="exercise-item"
                          key={exercise}
                        >
                          <span>{index + 1}</span>

                          <strong>{exercise}</strong>

                          <small>3 sets</small>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* RIGHT SIDE - PULL */}
                <div className="push-pull-section">
                  <h3 className="pull-title">
                    🔵 PULL WORKOUTS
                  </h3>
                 
                   
                  <div className="exercise-list">
                    {currentWorkout.pullExercises.map(
                      (exercise, index) => (
                        <div
                          className="exercise-item"
                          key={exercise}
                        >
                          <span>{index + 1}</span>

                          <strong>{exercise}</strong>

                          <small>3 sets</small>
                        </div>
                      )
                    )}
                  </div>
                </div>

              </div>
            </>
          ) : (
            <>
              <h3>Exercises</h3>

              <div className="exercise-list">
                {currentWorkout.exercises.map(
                  (exercise, index) => (
                    <div
                      className="exercise-item"
                      key={exercise}
                    >
                      <span>{index + 1}</span>

                      <strong>{exercise}</strong>

                      <small>3 sets</small>
                    </div>
                  )
                )}
              </div>
            </>
          )}

          <button
            className={
              completed
                ? "complete-workout completed"
                : "complete-workout"
            }
            onClick={handleComplete}
            disabled={completed}
          >
            {completed
              ? "Workout Completed ✓"
              : "Complete Workout ✓"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Workout;