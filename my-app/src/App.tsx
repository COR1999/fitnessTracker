import Chart from './components/chart'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Fitness Tracker</h1>
        <p className="text-center text-gray-600 mb-8">Track your daily exercise progress</p>
        <Chart />
      </div>
    </div>
  );
}

export default App;