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
            <div className="card" style={{padding: '1rem', minHeight: '400px'}}>
              <h2 className="heading-secondary mb-4">Progress Chart</h2>
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                <span className="ml-3 text-gray-600">Loading chart...</span>
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