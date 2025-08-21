// src/components/Chart.tsx
import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import exerciseData from "../exerciseData.json";

export interface ExerciseData {
  date: string;
  calories: number;
  durationMinutes?: number;
}

interface SeriesData {
  name: string;
  data: number[];
}

interface ChartData {
  title: string;
  subtitle: string;
  series: SeriesData[];
  categories: string[];
}

const Chart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Transform exercise data for Highcharts
  const transformedData: ChartData = {
    title: 'Fitness Tracker Data',
    subtitle: 'Calories and Duration Over Time',
    categories: exerciseData.map(item => item.date),
    series: [
      {
        name: 'Calories',
        data: exerciseData.map(item => item.calories)
      },
      {
        name: 'Duration (minutes)',
        data: exerciseData.map(item => item.durationMinutes || 0)
      }
    ]
  };

  useEffect(() => {
    if (chartRef.current) {
      // Highcharts configuration with proper TypeScript typing
      const chartOptions: Highcharts.Options = {
        title: {
          text: transformedData.title,
          align: 'left'
        },
        subtitle: {
          text: transformedData.subtitle,
          align: 'left'
        },
        yAxis: {
          title: {
            text: 'Values'
          }
        },
        xAxis: {
          categories: transformedData.categories,
          title: {
            text: 'Date'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            }
          }
        },
        series: transformedData.series.map((seriesItem): Highcharts.SeriesOptionsType => ({
          type: 'line',
          name: seriesItem.name,
          data: seriesItem.data
        })),
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        },
        credits: {
          enabled: false
        }
      };

      // Create the chart
      const chart = Highcharts.chart(chartRef.current, chartOptions);

      // Cleanup function
      return () => {
        if (chart) {
          chart.destroy();
        }
      };
    }
  }, [transformedData]);

  return (
    <div 
      ref={chartRef} 
      style={{ 
        width: '100%', 
        height: '400px',
        margin: '20px 0' 
      }} 
    />
  );
};

export default Chart;