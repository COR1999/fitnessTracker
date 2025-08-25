import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartOptions } from '../chartConfig.ts';
import { useMobile } from '../hooks/checkIsMobile.ts';
import { useFormatData } from '../hooks/formatChart.ts';

const Chart = () => {
  // Check if it's mobile
  let isMobile = useMobile();

  // Get the formatted data 
  const { dates, calories, durationMinutes } = useFormatData();
  
  // Get chart options from external config
  const options = getChartOptions(dates, calories, durationMinutes, isMobile);

  return (
    <div className="card card-content">
      <h2 className="heading-secondary mb-4">Progress Chart</h2>
      <div className="chart-container" data-testid="highchart-container">
        <div className="chart-responsive">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{ 
              style: { 
                width: '100%', 
                height: '100%',
                minHeight: isMobile ? '300px' : '400px'
              } 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;