const PageHead = () => { 
  return(
      <header className="relative text-center mb-8 overflow-hidden">
        <div className="card card-content header-gradient text-white shadow-2xl">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
              <div className="header-icon-wrapper mb-4 sm:mb-0">
                <div className="text-4xl animate-pulse">💪</div>
              </div>
              <h1 className="header-title text-center sm:text-left">
                Fitness Tracker
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-alice-blue/90 max-w-3xl mx-auto mb-8 font-medium px-4">
              Transform your fitness journey with smart tracking and insights
            </p>
            
            <div className="header-features px-4">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 group hover:text-white transition-colors duration-300">
                <span className="text-xl sm:text-2xl group-hover:animate-bounce">🎯</span>
                <span className="text-xs sm:text-sm font-semibold">Track Goals</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 group hover:text-white transition-colors duration-300">
                <span className="text-xl sm:text-2xl group-hover:animate-bounce">📈</span>
                <span className="text-xs sm:text-sm font-semibold">Monitor Progress</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 group hover:text-white transition-colors duration-300">
                <span className="text-xl sm:text-2xl group-hover:animate-bounce">🏆</span>
                <span className="text-xs sm:text-sm font-semibold">Achieve More</span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-pulse">
            <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-full"></div>
            <div className="absolute top-1/2 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-white/30 rounded-full"></div>
            <div className="absolute top-8 left-1/4 w-8 h-8 bg-white/10 rounded-full hidden sm:block"></div>
            <div className="absolute bottom-4 left-8 w-6 h-6 bg-white/15 rounded-full hidden sm:block"></div>
          </div>
        </div>
      </header>
  )
}

export default PageHead