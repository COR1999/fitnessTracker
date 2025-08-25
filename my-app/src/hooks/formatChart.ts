import { exerciseData, stepsConst } from '../../constants.ts';
import { useMemo } from 'react';

export const useFormatData = () => {

  const formattedData = useMemo(() => {
    // Extract data for chart
    const dates = exerciseData.map(item => item.date);
    const calories = exerciseData.map(item => item.calories);
    const stepsData = exerciseData.map(item => calculateSteps(item.durationMinutes, stepsConst));
    
    return {
      dates,
      calories,
      stepsData,
    };
  }, []); // No dependencies needed since exerciseData is a static import

  return formattedData;
}

const calculateSteps = function(x:number, y:number) {
  return (x * y)
}