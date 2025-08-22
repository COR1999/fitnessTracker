import Chart from './components/chart'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="bg-blue-500 p-8">
      <div className="bg-red-300 m-4">
      <Header />
      <main className="bg-green-200 p-4">
        <div className="bg-yellow-100 p-2">
          <h1 className="text-4xl font-bold text-purple-600 text-center mb-8">Tailwind Test</h1>

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