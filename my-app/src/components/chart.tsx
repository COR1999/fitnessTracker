import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartOptions } from '../chartConfig.ts';
import { useMobile } from '../hooks/checkIsMobile.ts';
import { useFormatData } from '../hooks/formatChart.ts';

const Chart = () => {
  // Check if it's mobile
  const isMobile = useMobile();

  // Get the formatted data 
  const { dates, calories, stepsData } = useFormatData();
  // Get chart options from external config
  const options = getChartOptions(dates, calories, stepsData, isMobile);

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
              } 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;