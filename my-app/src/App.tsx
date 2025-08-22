import Chart from './components/chart'
import './App.css'
import { useState } from 'react'
import { exerciseData } from '../constants'

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [workouts, setWorkouts] = useState([])
  
  // Get the number of objects in exerciseData
  const totalSessions = exerciseData.length
  
  // Calculate this week's sessions (2025-08-01 to 2025-08-05)
  const weekStart = new Date('2025-08-01')
  const weekEnd = new Date('2025-08-05')
  const thisWeekSessions = exerciseData.filter(workout => {
    const workoutDate = new Date(workout.date)
    return workoutDate >= weekStart && workoutDate <= weekEnd
  }).length
  
  // Find the best day (highest calories)
  const bestDay = exerciseData.reduce((best, current) => {
    return current.calories > best.calories ? current : best
  }, exerciseData[0])?.calories || 0

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const newWorkout = {
      date: formData.get('date') as string,
      calories: parseInt(formData.get('calories') as string),
      durationMinutes: parseInt(formData.get('duration') as string),
    }
    let totalSession = newWorkout["date"].length;
    console.log(totalSession);

    // Don't save anywhere, just show success message
    setWorkouts([...workouts, newWorkout])
    setShowAddForm(false)
    ;(e.target as HTMLFormElement).reset()
    // Log to console to show that work out could be added to database
    console.log("Workout added to database pending approval!")
  }
  return (
    <div className="app-container">
      <main className="content-wrapper">
        <div className="content-max-width">
          <div className="text-center mb-6">
            <h1 className="heading-primary">
              Welcome to Your Fitness Journey
            </h1>
            <p className="text-subtitle">
              Track your workouts, monitor your progress, and achieve your fitness goals with our comprehensive dashboard.
            </p>
          </div>

          {/* Stats Overview Card */}
          <div className="mb-6">
            <div className="card card-content">
              <h2 className="heading-secondary">Workout Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="stat-card stat-card-blue">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Total Sessions</p>
                      <p className="text-3xl font-bold text-blue-900 mt-2">{totalSessions}</p>
                    </div>
                    <div className="text-3xl">🏃‍♂️</div>
                  </div>
                </div>
                <div className="stat-card stat-card-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700 font-semibold uppercase tracking-wide">This Week</p>
                      <p className="text-3xl font-bold text-green-900 mt-2">{thisWeekSessions}</p>
                    </div>
                    <div className="text-3xl">📅</div>
                  </div>
                </div>
                <div className="stat-card stat-card-purple">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-700 font-semibold uppercase tracking-wide">Best Day</p>
                      <p className="text-3xl font-bold text-purple-900 mt-2">{bestDay}cal</p>
                    </div>
                    <div className="text-3xl">🔥</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Workout Button */}
          <div className="mb-8 flex justify-center">
            <button data-testid="workout-button"
              onClick={() => setShowAddForm(!showAddForm)}
              className="btn-primary">
              {showAddForm ? '✕ Cancel' : '+ Add Workout'}
            </button>
          </div>

          {/* Add Workout Form */}
          {showAddForm && (
            <div className="mb-8 flex justify-center">
              <div data-testid="workout-form" className="card card-form">
                <h3 className="heading-secondary">Add New Workout</h3>
                <form onSubmit={handleAddWorkout} className="space-y-6">
                  <div>
                    <label className="form-label">Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      required
                      defaultValue={new Date().toISOString().split('T')[0]}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Calories Burned</label>
                    <input 
                      type="number" 
                      name="calories" 
                      placeholder="e.g. 250"
                      required
                      min="1"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Duration (minutes)</label>
                    <input 
                      type="number" 
                      name="duration" 
                      placeholder="e.g. 30"
                      required
                      min="1"
                      className="form-input"
                    />
                  </div>
                  <button data-testid="submit-button"
                    type="submit"
                    className="w-full btn-success">
                    ✅ Add Workout
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Chart Section */}
          <div className="card" style={{padding: '1rem'}}>
            <h2 className="heading-secondary mb-4">Progress Chart</h2>
            <Chart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;