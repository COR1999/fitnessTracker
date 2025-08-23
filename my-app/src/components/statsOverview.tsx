import { exerciseData } from '../../constants'


const StatsOverview = () => {
 
  // Calculate this week's sessions (2025-08-01 to 2025-08-05)
  const weekStart = new Date('2025-08-01')
  const weekEnd = new Date('2025-08-05')
   // Get the number of objects in exerciseData
  const totalSessions = exerciseData.length
  const thisWeekSessions = exerciseData.filter(workout => {
    const workoutDate = new Date(workout.date)
    return workoutDate >= weekStart && workoutDate <= weekEnd
  }).length

  
  // Find the best day (highest calories)
  const bestDay = exerciseData.reduce((best, current) => {
    return current.calories > best.calories ? current : best
  }, exerciseData[0])?.calories || 0



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
  )
}

export default StatsOverview