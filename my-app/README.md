<!--  Write Readme explaing about the app. -->
<!-- Picture of application -->
<!-- Overview -->
<!-- Using application  -->
<!-- UX -->
<!-- Features -->
<!-- Exitings functionality -->
Thie application is a simple app that helps the user keep track of exercise progress and plots data points on a chart
Ability to add new workouts
Overview of all current workouts 
<!-- Future Enchancements -->
Ability to connect to Google Health api and upload data from smart watches and mobile devices
<!-- Testing -->
Playwright was used for E2E testing.
Chart check that buttons on chart remove the aproperate plotted line.


<!-- Use of Ai -->
In this project i used ai to assit me with implmentation of the charts
In this project i used ai to assit me with UI
In this proejct i used ai to help with the implamentation of Playwright
<!-- Known Issues -->
<!-- Deployment -->

<!-- Technologies Used -->
[Highcharts]"https://www.highcharts.com/" -- where used to deplay data from exerciseData.json to user 
[React]
[Tailwind]
[Typescript]
[Playwright] - Implamented by reading the doc and use of ai

<!-- Color Choice -->

<!-- Content -->
The data set was given by a 3rd party.
<!--  -->

# Fitness Tracker

![Fitness Tracker App](my-app/src/assets/Screenshot%202025-08-25%20014540.png)

A modern fitness tracking web application built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

[View Live Application](https://fitness-tracker-bice-one.vercel.app/)

## Features

- **Add Workouts**: Easy-to-use form to log your exercise sessions
- **View Statistics**: Comprehensive overview of your fitness progress 
- **Interactive Charts**: Visual representation of your workout data using Highcharts
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Performance Optimized**: Lazy loading and code splitting for fast load times

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Highcharts
- **Build Tool**: Vite
- **Testing**: Playwright
- **Deployment**: Vercel

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # React components
│   ├── addWorkoutForm.tsx
│   ├── chart.tsx
│   ├── header.tsx
│   └── statsOverview.tsx
├── hooks/              # Custom hooks
└── chartConfig.ts      # Chart configuration
```

## Testing

This project uses **Playwright** for end-to-end testing with comprehensive browser coverage.

### Test Coverage

The test suite includes:
- **Page Load Tests**: Verifies title and welcome text display correctly
- **Form Interaction Tests**: Tests workout form visibility toggle and submission
- **Chart Rendering Tests**: Ensures Highcharts component loads and displays data
- **Cross-browser Testing**: Tests run on Chrome, Firefox, and Safari

### Running Tests

**Basic test run:**
```bash
npx playwright test
```

**Interactive UI mode (recommended for development):**
```bash
npx playwright test --ui
```

**Run specific browser:**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Debug mode:**
```bash
npx playwright test --debug
```

### Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

### Test Configuration

- Tests run in parallel for faster execution
- Automatic retries on CI environments
- Trace collection on test failures for debugging
- Cross-browser testing (Chrome, Firefox, Safari)

### Prerequisites for Testing

Make sure your development server is running on `http://localhost:5173` before running tests:
```bash
npm run dev
```





## 🔮 Future Enhancements

### Data Management
- **Cloud Storage Integration**: Implement backend database to sync workouts across devices
- **Local Storage Optimization**: Enhanced local storage with better data structure and compression
- **Export Functionality**: Allow users to export workout data as CSV/JSON files
- **Import Workouts**: Support importing data from other fitness apps

### User Experience
- **User Authentication**: Account creation and login system
- **Workout Templates**: Pre-built workout routines for different fitness goals
- **Progress Photos**: Upload and track progress photos over time
- **Dark Mode**: Toggle between light and dark themes

### Analytics & Insights
- **Advanced Statistics**: Weekly/monthly progress reports and trends
- **Goal Setting**: Set and track fitness goals with progress indicators
- **Personal Records**: Track and celebrate new personal bests
- **Workout Streaks**: Gamification with streak tracking and achievements

### Performance Optimizations
- **Text Compression**: Implement compression for better performance
- **Service Worker**: Add offline functionality and caching
- **Image Optimization**: Lazy loading and compression for progress photos
- **Progressive Web App**: Full PWA support with install prompt

### Social Features
- **Workout Sharing**: Share workouts with friends and community
- **Challenges**: Participate in fitness challenges with other users
- **Social Feed**: Follow friends and see their workout updates

### Technical Improvements
- **TypeScript Strict Mode**: Enhanced type safety across the application
- **Unit Testing**: Comprehensive Jest/React Testing Library coverage
- **CI/CD Pipeline**: Automated testing and deployment
- **Error Boundary**: Better error handling and user feedback