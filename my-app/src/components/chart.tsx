import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { exerciseData } from '../../constants.ts';
import { getChartOptions } from '../chartConfig.ts';
import { useMobile } from '../hooks/checkIsMobile.ts';

const Chart = () => {
  // Check if its mobile
  let isMobile = useMobile();

  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Extract data for chart
  const dates = exerciseData.map(item => formatDate(item.date));
  const calories = exerciseData.map(item => item.calories);
  const durationMinutes = exerciseData.map(item => item.durationMinutes);

  // Get chart options from external config
  const options = getChartOptions(dates, calories, durationMinutes, isMobile);

  return (
    <div className="card" style={{padding: '1rem'}}>
      <h2 className="heading-secondary mb-4">Progress Chart</h2>
      <div className="chart-container " data-testid="highchart-container">
        <div className="chart-responsive"
        >
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{ style: { width: '100%', height: '100%' } }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;