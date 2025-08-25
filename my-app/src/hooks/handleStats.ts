import { exerciseData } from '../../constants'

export const numberOfObjects = () => {
  // Get the number of objects in exerciseData
  return exerciseData.length;
}

export const getBestDay = () =>{
  // Get the highest calorie count from all workouts
  const bestDay = exerciseData.reduce((best, current) => {
    return current.calories > best.calories ? current : best
  }, exerciseData[0])?.calories || 0

  return bestDay;
}

export const getTotalHours = () => {
  // Calculate total hours spent training
  const totalMinutes = exerciseData.reduce((total, workout) => {
    return total + (workout.durationMinutes || 0);
  }, 0);
  
  return Math.round((totalMinutes / 60) * 10) / 10; // Round to 1 decimal place
}
