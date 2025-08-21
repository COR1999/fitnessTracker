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
      text: 'Fitness Tracker - Exercise Progress'
    },
    subtitle: {
      text: 'Daily calories burned and workout duration'
    },
    xAxis: {
      categories: dates,
      title: {
        text: 'Date'
      }
    },
    yAxis: [{
      title: {
        text: 'Calories',
        style: {
          color: '#7cb5ec'
        }
      },
      tickInterval: 50,
      min: 0
    }, {
      title: {
        text: 'Minutes',
        style: {
          color: '#434348'
        }
      },
      tickInterval: 10,
      min: 0,
      opposite: true
    }],
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    series: [{
      name: 'Calories Burned',
      data: calories,
      yAxis: 0,
      color: '#7cb5ec'
    }, {
      name: 'Duration (Minutes)',
      data: durationMinutes,
      yAxis: 1,
      color: '#434348'
    }],
    credits: {
      enabled: false
    }
  };

  return (
    <div style={{ width: '100%', height: '400px', margin: '20px 0' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default Chart;