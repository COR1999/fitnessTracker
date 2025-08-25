/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'caribbean-current': '#006d77', 
        'tiffany-blue': '#83c5be',
        'alice-blue': '#edf6f9',
        'pale-dogwood': '#ffddd2',
        'atomic-tangerine': '#e29578',
      },
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
          '@apply min-h-screen bg-gradient-to-br from-alice-blue to-tiffany-blue/30': {},
        },
        '.content-wrapper': {
          '@apply container mx-auto px-4 py-4': {},
        },
        '.content-max-width': {
          '@apply max-w-6xl mx-auto': {},
        },
        
        // Card utilities
        '.card': {
          '@apply bg-alice-blue/90 rounded-2xl shadow-xl border border-tiffany-blue/20 backdrop-blur-sm': {},
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
          '@apply bg-gradient-to-r from-caribbean-current to-tiffany-blue hover:from-caribbean-current/90 hover:to-tiffany-blue/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105': {},
        },
        '.btn-success': {
          '@apply bg-gradient-to-r from-atomic-tangerine to-pale-dogwood hover:from-atomic-tangerine/90 hover:to-pale-dogwood/90 text-caribbean-current font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105': {},
        },
        
        // Stat card utilities
        '.stat-card': {
          '@apply p-5 rounded-xl border hover:shadow-lg transition-all duration-300': {},
        },
        '.stat-card-blue': {
          '@apply bg-gradient-to-br from-alice-blue to-tiffany-blue/20 border-tiffany-blue/30': {},
        },
        '.stat-card-green': {
          '@apply bg-gradient-to-br from-pale-dogwood/30 to-atomic-tangerine/20 border-atomic-tangerine/30': {},
        },
        '.stat-card-purple': {
          '@apply bg-gradient-to-br from-tiffany-blue/20 to-caribbean-current/10 border-caribbean-current/30': {},
        },
        
        // Form utilities
        '.form-input': {
          '@apply w-full border-2 border-tiffany-blue/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caribbean-current focus:border-transparent transition-all duration-200 bg-alice-blue/50': {},
        },
        '.form-label': {
          '@apply block text-sm font-semibold text-caribbean-current mb-2': {},
        },
        
        // Typography utilities
        '.heading-primary': {
          '@apply text-3xl font-bold text-caribbean-current mb-3': {},
        },
        '.heading-secondary': {
          '@apply text-2xl font-bold text-caribbean-current mb-6 text-center': {},
        },
        '.text-subtitle': {
          '@apply text-xl text-tiffany-blue/70 max-w-2xl mx-auto': {},
        },
        
        // Layout utilities
        '.loading-container': {
          '@apply flex items-center justify-center h-64': {},
        },
        '.loading-spinner': {
          '@apply animate-spin rounded-full h-8 w-8 border-b-2 border-caribbean-current': {},
        },
        '.loading-text': {
          '@apply ml-3 text-caribbean-current': {},
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
          '@apply bg-gradient-to-br from-caribbean-current via-tiffany-blue to-atomic-tangerine': {},
        },
        '.header-icon-wrapper': {
          '@apply bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4 transition-transform duration-300 hover:scale-110': {},
        },
        '.header-title': {
          '@apply text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-alice-blue to-pale-dogwood bg-clip-text text-transparent': {},
        },
        '.header-features': {
          '@apply flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80': {},
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}