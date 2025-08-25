/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '88': '22rem',
        '116': '29rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        // Container utilities
        '.app-container': {
          '@apply min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100': {},
        },
        '.content-wrapper': {
          '@apply container mx-auto px-4 py-4': {},
        },
        '.content-max-width': {
          '@apply max-w-6xl mx-auto': {},
        },
        
        // Card utilities
        '.card': {
          '@apply bg-white rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-white/95': {},
        },
        '.card-content': {
          '@apply p-6': {},
        },
        '.card-form': {
          '@apply p-8 max-w-md w-full': {},
        },
        
        // Chart container utilities
        '.chart-container': {
          '@apply w-full mx-auto': {},
        },
        '.chart-responsive': {
          '@apply w-full overflow-hidden': {},
          'height': '400px',
          '@media (max-width: 768px)': {
            'height': '300px',
            'padding': '0',
          },
        },
        
        // Button utilities
        '.btn-primary': {
          '@apply bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105': {},
        },
        '.btn-success': {
          '@apply bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105': {},
        },
        
        // Stat card utilities
        '.stat-card': {
          '@apply p-5 rounded-xl border hover:shadow-lg transition-all duration-300': {},
        },
        '.stat-card-blue': {
          '@apply bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200': {},
        },
        '.stat-card-green': {
          '@apply bg-gradient-to-br from-green-50 to-green-100 border-green-200': {},
        },
        '.stat-card-purple': {
          '@apply bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200': {},
        },
        
        // Form utilities
        '.form-input': {
          '@apply w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200': {},
        },
        '.form-label': {
          '@apply block text-sm font-semibold text-gray-700 mb-2': {},
        },
        
        // Typography utilities
        '.heading-primary': {
          '@apply text-3xl font-bold text-gray-800 mb-3': {},
        },
        '.heading-secondary': {
          '@apply text-2xl font-bold text-gray-800 mb-6 text-center': {},
        },
        '.text-subtitle': {
          '@apply text-xl text-gray-400 max-w-2xl mx-auto': {},
        },
        
        // Layout utilities
        '.loading-container': {
          '@apply flex items-center justify-center h-64': {},
        },
        '.loading-spinner': {
          '@apply animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600': {},
        },
        '.loading-text': {
          '@apply ml-3 text-gray-600': {},
        },
        '.center-form': {
          '@apply mb-8 flex justify-center': {},
        },
        '.min-height-120': {
          'min-height': '120px',
        },
        '.min-height-400': {
          'min-height': '400px',
        },
        
        // Header utilities
        '.header-gradient': {
          '@apply bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700': {},
        },
        '.header-icon-wrapper': {
          '@apply bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4 transition-transform duration-300 hover:scale-110': {},
        },
        '.header-title': {
          '@apply text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent': {},
        },
        '.header-features': {
          '@apply flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80': {},
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}