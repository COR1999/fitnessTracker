import Chart from './components/chart'
import Header from './components/Header'
import Footer from './components/Footer'
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
    alert('Workout added to database pending approval!')
  }
  return (
    <div className="bg-blue-500 p-8">
      <div className="bg-red-300 m-4">
      <Header />
      <main className="bg-green-200 p-4">
        <div className="bg-yellow-100 p-2">
          <h1 className="text-4xl font-bold text-purple-600 text-center mb-8">Tailwind Test</h1>

          {/* Stats Overview Card */}
          <div className="mb-6 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg border p-6 max-w-2xl w-full">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Workout Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Total Sessions</p>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">This Week</p>
                  <p className="text-2xl font-bold text-green-600">4</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Best Day</p>
                  <p className="text-2xl font-bold text-purple-600">450cal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add Workout Button */}
          <div className="mb-6 flex justify-center">
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
            >
              {showAddForm ? 'Cancel' : 'Add Workout'}
            </button>
          </div>

          {/* Add Workout Form */}
          {showAddForm && (
            <div className="mb-6 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg border p-6 max-w-md w-full">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Add New Workout</h3>
                <form onSubmit={handleAddWorkout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      required
                      defaultValue={new Date().toISOString().split('T')[0]}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Calories Burned</label>
                    <input 
                      type="number" 
                      name="calories" 
                      placeholder="e.g. 250"
                      required
                      min="1"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                    <input 
                      type="number" 
                      name="duration" 
                      placeholder="e.g. 30"
                      required
                      min="1"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                  >
                    Add Workout
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Chart Section */}
          <div>
            <div>
              <Chart />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;