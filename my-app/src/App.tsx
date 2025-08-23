import Chart from './components/chart'
import StatsOverview from "./components/statsOverview"
import AddWorkoutForm from './components/addWorkoutForm.tsx'
import './App.css'



function App() {


  
  
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
          <StatsOverview />
          

          {/* Add Workout Form */}
          <AddWorkoutForm />

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