import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exerciseData from '../../exerciseData.json';

const Chart = () => {
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Extract data for chart
  const dates = exerciseData.map(item => formatDate(item.date));
  const calories = exerciseData.map(item => item.calories);
  const durationMinutes = exerciseData.map(item => item.durationMinutes);

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
          color: '#02c39a'
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
          color: '#028090'
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
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      itemStyle: {
        color: '#05668d'
      }
    },
    series: [{
      name: 'Calories Burned',
      data: calories,
      yAxis: 0,
      color: '#02c39a'
    }, {
      name: 'Duration (Minutes)',
      data: durationMinutes,
      yAxis: 1,
      color: '#028090'
    }],
    credits: {
      enabled: false
    },
    chart: {
      backgroundColor: '#f0f3bd'
    }
  };

  return (
    <div 
      className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border-2"
      style={{ 
        backgroundColor: 'var(--persian-green)',
        borderColor: 'var(--teal)',
        minHeight: '300px'
      }}
    >
      <div 
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
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