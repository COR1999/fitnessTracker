import Chart from './components/chart'
import './App.css'
import { useState } from 'react'

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [workouts, setWorkouts] = useState([])

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const newWorkout = {
      date: formData.get('date') as string,
      calories: parseInt(formData.get('calories') as string),
      durationMinutes: parseInt(formData.get('duration') as string),
    }
    
    // Don't save anywhere, just show success message
    setWorkouts([...workouts, newWorkout])
    setShowAddForm(false)
    ;(e.target as HTMLFormElement).reset()
    // Log to console to show that work out could be added to database
    console.log("Workout added to database pending approval!")
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome to Your Fitness Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track your workouts, monitor your progress, and achieve your fitness goals with our comprehensive dashboard.
            </p>
          </div>

          {/* Stats Overview Card */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 backdrop-blur-sm bg-white/90">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Workout Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Total Sessions</p>
                      <p className="text-3xl font-bold text-blue-900 mt-2">12</p>
                    </div>
                    <div className="text-3xl">🏃‍♂️</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700 font-semibold uppercase tracking-wide">This Week</p>
                      <p className="text-3xl font-bold text-green-900 mt-2">4</p>
                    </div>
                    <div className="text-3xl">📅</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-700 font-semibold uppercase tracking-wide">Best Day</p>
                      <p className="text-3xl font-bold text-purple-900 mt-2">450cal</p>
                    </div>
                    <div className="text-3xl">🔥</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Workout Button */}
          <div className="mb-8 flex justify-center">
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {showAddForm ? '✕ Cancel' : '+ Add Workout'}
            </button>
          </div>

          {/* Add Workout Form */}
          {showAddForm && (
            <div className="mb-8 flex justify-center">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md w-full backdrop-blur-sm bg-white/95">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Workout</h3>
                <form onSubmit={handleAddWorkout} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      required
                      defaultValue={new Date().toISOString().split('T')[0]}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Calories Burned</label>
                    <input 
                      type="number" 
                      name="calories" 
                      placeholder="e.g. 250"
                      required
                      min="1"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (minutes)</label>
                    <input 
                      type="number" 
                      name="duration" 
                      placeholder="e.g. 30"
                      required
                      min="1"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    ✅ Add Workout
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Chart Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 backdrop-blur-sm bg-white/95">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Progress Chart</h2>
            <Chart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;