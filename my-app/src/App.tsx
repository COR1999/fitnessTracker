import Chart from './components/chart'
import StatsOverview from "./components/statsOverview"
import AddWorkoutForm from './components/addWorkoutForm.tsx'
import PageHead from './components/header.tsx'
import './App.css'

function App() {
  
  return (
    <div className="app-container">
      <main className="content-wrapper">
        <div className="content-max-width">
          {/* Page head section */}
          <PageHead />

          {/* Stats Overview Card */}
          <StatsOverview />
          
          {/* Add Workout Form */}
          <AddWorkoutForm />

          {/* Chart Section */}
          <Chart />

        </div>
      </main>
    </div>
  );
}

export default App;