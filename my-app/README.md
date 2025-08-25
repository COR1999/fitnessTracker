# Fitness Tracker

A simple fitness tracking web application built with React, TypeScript, and Tailwind CSS.

## Features

- **Add Workouts**: Easy form to log your exercise sessions
- **View Statistics**: Overview of your fitness progress 
- **Interactive Charts**: Visual representation of your workout data using Highcharts
- **Responsive Design**: Works on both desktop and mobile devices

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Highcharts
- **Build Tool**: Vite
- **Testing**: Playwright

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





Future inhancments use "if data wasnt stored locally use "use state" to get data from local storage

Add text compression to optimaise performance
