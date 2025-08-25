export const chartColors = {
  primary: '#006d77',        // caribbean-current (dark teal)
  secondary: '#006d77',      // caribbean-current for better contrast
  accent1: '#e29578',        // atomic-tangerine (orange - calories)
  accent2: '#006d77',        // caribbean-current (dark teal - duration)
  transparent: 'transparent'
};

export const getChartOptions = (
  dates: string[], 
  calories: number[], 
  stepsData: number[], 
  isMobile: boolean
) => ({
  title: {
    text: 'Fitness Tracker - Exercise Progress',
    style: {
      color: chartColors.primary
    }
  },
  subtitle: {
    text: 'Daily calories burned and steps taken',
    style: {
      color: chartColors.secondary
    }
  },
  xAxis: {
    categories: dates,
    title: {
      text: 'Date',
      style: {
        color: chartColors.secondary
      }
    },
    labels: {
      style: {
        color: chartColors.secondary
      }
    }
  },
  yAxis: {
    title: {
      text: 'Calories/Steps',
      style: {
        color: chartColors.secondary
      }
    },
    labels: {
      style: {
        color: chartColors.secondary
      }
    },
    min: 0
  },
  legend: {
    layout: isMobile ? 'horizontal' : 'vertical',
    align: isMobile ? 'center' : 'right',
    verticalAlign: isMobile ? 'bottom' : 'middle',
    itemStyle: {
      color: chartColors.secondary
    }
  },
  series: [{
    name: 'Calories Burned',
    data: calories,
    color: chartColors.accent1
  }, {
    name: 'Steps Taken',
    data: stepsData,
    color: chartColors.accent2
  }],
  credits: {
    enabled: false
  },
  chart: {
    backgroundColor: chartColors.transparent
  }
});