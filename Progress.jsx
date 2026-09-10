import "./Progress.css";

function Progress({
  goToDashboard,
  workoutCount,
  caloriesBurned,
}) {
  const monthlyGoal = 20;

  const percentage = Math.min(
    Math.round(
      (workoutCount / monthlyGoal) * 100
    ),
    100
  );

  return (
    <div className="progress-page">
      <div className="progress-header">
        <button onClick={goToDashboard}>
          ← Dashboard
        </button>

        <p>YOUR PERFORMANCE</p>

        <h1>Progress Dashboard</h1>

        <span>
          Monitor your fitness journey and stay consistent.
        </span>
      </div>

      <div className="progress-stats">
        <div className="progress-card">
          <span>🏋️</span>
          <p>Total Workouts</p>
          <h2>{workoutCount}</h2>
        </div>
        <div className="progress-card">
          <span>🎯</span>
          <p>Monthly Goal</p>
          <h2>{monthlyGoal}</h2>
          <small>Workouts Minimum</small>
        </div>
      </div>

      <div className="goal-card">
        <div className="goal-heading">
          <div>
            <p>MONTHLY GOAL</p>
            <h2>Workout Goal</h2>
          </div>

          <strong>{percentage}%</strong>
        </div>

        <div className="goal-bar">
          <div
            className="goal-fill"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>

        <p className="goal-text">
          {workoutCount} of {monthlyGoal} workouts
          completed
        </p>
      </div>

      <div className="achievement-card">
        <div className="achievement-icon">
          🏆
        </div>

        <div>
          <h2>Keep Going!</h2>

          <p>
            Every completed workout brings you
            closer to your fitness goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;