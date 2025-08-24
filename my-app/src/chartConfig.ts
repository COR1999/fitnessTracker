export const chartColors = {
  primary: '#001a1d',
  secondary: '#05668d',
  accent1: '#3b82f6',
  accent2: '#8b5cf6',
  transparent: 'transparent'
};

export const getChartOptions = (
  dates: string[], 
  calories: number[], 
  durationMinutes: number[], 
  isMobile: boolean
) => ({
  title: {
    text: 'Fitness Tracker - Exercise Progress',
    style: {
      color: chartColors.primary
    }
  },
  subtitle: {
    text: 'Daily calories burned and workout duration',
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
  yAxis: [{
    title: {
      text: 'Calories',
      style: {
        color: chartColors.accent1
      }
    },
    labels: {
      style: {
        color: chartColors.secondary
      }
    },
    tickInterval: 50,
    min: 0
  }, {
    title: {
      text: 'Minutes',
      style: {
        color: chartColors.accent2
      }
    },
    labels: {
      style: {
        color: chartColors.secondary
      }
    },
    tickInterval: 10,
    min: 0,
    opposite: true
  }],
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
    yAxis: 0,
    color: chartColors.accent1
  }, {
    name: 'Duration (Minutes)',
    data: durationMinutes,
    yAxis: 1,
    color: chartColors.accent2
  }],
  credits: {
    enabled: false
  },
  chart: {
    backgroundColor: chartColors.transparent
  }
});