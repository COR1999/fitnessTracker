import { exerciseData } from '../../constants.ts';
import { useMemo } from 'react';

export const useFormatData = () => {

  const formattedData = useMemo(() => {
    // Format dates for display
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    // Extract data for chart
    const dates = exerciseData.map(item => formatDate(item.date));
    const calories = exerciseData.map(item => item.calories);
    const durationMinutes = exerciseData.map(item => item.durationMinutes);

    return {
      dates,
      calories,
      durationMinutes
    };
  }, []); // No dependencies needed since exerciseData is a static import

  return formattedData;
}