import { lazy, Suspense } from 'react'
import StatsOverview from "./components/statsOverview"
import AddWorkoutForm from './components/addWorkoutForm.tsx'
import PageHead from './components/header.tsx'
import './App.css'

const Chart = lazy(() => import('./components/chart'))

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
          <Suspense fallback={
            <div className="card card-content min-height-400">
              <h2 className="heading-secondary mb-4">Progress Chart</h2>
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <span className="loading-text">Loading chart...</span>
              </div>
            </div>
          }>
            <Chart />
          </Suspense>

        </div>
      </main>
    </div>
  );
}

export default App;