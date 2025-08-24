import { getBestDay, useStats, numberOfObjects } from '../hooks/handleStats'
import { exerciseData } from '../../constants'

const StatsOverview = () => {
  const stats = useStats(exerciseData);
  const totalSessions = numberOfObjects()

  return (
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
              <p className="text-3xl font-bold text-green-900 mt-2">{stats.thisWeekSessions}</p>
            </div>
            <div className="text-3xl">📅</div>
          </div>
        </div>
        <div className="stat-card stat-card-purple">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-semibold uppercase tracking-wide">Best Day</p>
              <p className="text-3xl font-bold text-purple-900 mt-2">{getBestDay()}cal</p>
            </div>
              <div className="text-3xl">🔥</div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default StatsOverview