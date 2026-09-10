import "./WorkoutHistory.css";

function WorkoutHistory({
  goToDashboard,
  history,
}) {
  return (
    <div className="history-page">
      <nav className="history-nav">
        <h2>
          FITNESS<span>TRACK</span>
        </h2>

        <button onClick={goToDashboard}>
          ← Dashboard
        </button>
      </nav>

      <main className="history-container">
        <div className="history-header">
          <p>YOUR ACTIVITY</p>

          <h1>Workout History</h1>

          <span>
            Keep track of every workout you complete.
          </span>
        </div>

        {history.length === 0 ? (
          <div className="empty-history">
            <div>🏋️</div>

            <h2>No workouts yet</h2>

            <p>
              Complete your first workout to see it here.
            </p>
          </div>
        ) : (
          <div className="history-list">
            {history.map((workout) => (
              <div
                className="history-card"
                key={workout.id}
              >
                <div className="history-icon">
                  💪
                </div>

                <div className="history-info">
                  <h3>{workout.name}</h3>
                  <p>{workout.date}</p>
                </div>

                <div className="history-details">
                  <span>
                    ⏱ {workout.duration}
                  </span>
                </div>

                <div className="completed-badge">
                  Completed ✓
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default WorkoutHistory;