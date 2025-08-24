import { exerciseData } from '../../constants'
import { useMemo } from 'react';


// What each workout looks like
type Workout = {
  date: string;
  [key: string]: any; // for other properties
};

export const useStats = (
  exerciseData: Workout[],
  startDate: string = '2025-08-01',
  endDate: string = '2025-08-05'
) => {
  const stats = useMemo(() => {
    const dateStart = new Date(startDate);
    const dateEnd = new Date(endDate);
    
    // Calculate this week's sessions
    const weekStart = dateStart;
    const weekEnd = dateEnd;
  
    const thisWeekSessions = exerciseData.filter(workout => {
      const workoutDate = new Date(workout.date);
      return workoutDate >= weekStart && workoutDate <= weekEnd;
    }).length;

    return {
      thisWeekSessions,
      weekStart,
      weekEnd
    };
  }, [exerciseData, startDate, endDate]);

  return stats;
};

export const numberOfObjects = () => {
  // Get the number of objects in exerciseData
  return exerciseData.length;
}

export const getBestDay = () =>{
  // Find the best day (highest calories)
  const bestDay = exerciseData.reduce((best, current) => {
    return current.calories > best.calories ? current : best
  }, exerciseData[0])?.calories || 0

  return bestDay;
}
