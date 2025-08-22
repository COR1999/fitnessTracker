import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { exerciseData } from '../../constants.ts';
import { useState, useEffect } from 'react';

const Chart = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Extract data for chart
  const dates = exerciseData.map(item => formatDate(item.date));
  const calories = exerciseData.map(item => item.calories);
  const durationMinutes = exerciseData.map(item => item.durationMinutes);


  // Chart options 
  const options = {
    title: {
      text: 'Fitness Tracker - Exercise Progress',
      style: {
        color: '#001a1d'
      }
    },
    subtitle: {
      text: 'Daily calories burned and workout duration',
      style: {
        color: '#05668d'
      }
    },
    xAxis: {
      categories: dates,
      title: {
        text: 'Date',
        style: {
          color: '#05668d'
        }
      },
      labels: {
        style: {
          color: '#05668d'
        }
      }
    },
    yAxis: [{
      title: {
        text: 'Calories',
        style: {
          color: '#3b82f6'
        }
      },
      labels: {
        style: {
          color: '#05668d'
        }
      },
      tickInterval: 50,
      min: 0
    }, {
      title: {
        text: 'Minutes',
        style: {
          color: '#8b5cf6'
        }
      },
      labels: {
        style: {
          color: '#05668d'
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
        color: '#05668d'
      }
    },
    series: [{
      name: 'Calories Burned',
      data: calories,
      yAxis: 0,
      color: '#3b82f6'
    }, {
      name: 'Duration (Minutes)',
      data: durationMinutes,
      yAxis: 1,
      color: '#8b5cf6'
    }],
    credits: {
      enabled: false
    },
    chart: {
      backgroundColor: 'transparent'
    }
  };

  return (
    <div className="chart-container" data-testid="highchart-container">
      <div 
        className="chart-responsive"
        style={{ padding: '8px' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{ style: { width: '100%', height: '100%' } }}
        />
      </div>
    </div>
  );
};

export default Chart;