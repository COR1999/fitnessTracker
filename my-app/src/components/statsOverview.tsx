import { getBestDay, useStats, numberOfObjects } from '../hooks/handleStats'
import { exerciseData } from '../../constants'

const StatsOverview = () => {
  const stats = useStats(exerciseData);
  const totalSessions = numberOfObjects()

  return (
    <div className="mb-8">
      <div className="card card-content">
        <h2 className="heading-secondary mb-8">Workout Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stat-card stat-card-blue hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-caribbean-current font-black uppercase tracking-wider mb-3 bg-caribbean-current/10 px-2 py-1 rounded-md inline-block">💪 Total Sessions</p>
                <p className="text-4xl font-extrabold text-caribbean-current leading-none">{totalSessions}</p>
              </div>
              <div className="text-4xl ml-4 transform hover:scale-110 transition-transform duration-200">🏃‍♂️</div>
            </div>
          </div>
          <div className="stat-card stat-card-green hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-atomic-tangerine font-black uppercase tracking-wider mb-3 bg-atomic-tangerine/10 px-2 py-1 rounded-md inline-block">📊 This Week</p>
                <p className="text-4xl font-extrabold text-atomic-tangerine leading-none">{stats.thisWeekSessions}</p>
              </div>
              <div className="text-4xl ml-4 transform hover:scale-110 transition-transform duration-200">📅</div>
            </div>
          </div>
          <div className="stat-card stat-card-purple hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-tiffany-blue font-black uppercase tracking-wider mb-3 bg-tiffany-blue/10 px-2 py-1 rounded-md inline-block">🏆 Highest Calories</p>
                <p className="text-4xl font-extrabold text-tiffany-blue leading-none">{getBestDay()}cal</p>
              </div>
              <div className="text-4xl ml-4 transform hover:scale-110 transition-transform duration-200">🔥</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverview