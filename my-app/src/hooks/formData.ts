import { useState } from 'react'

// Define the workout type
type Workout = {
date: string;
calories: number;
durationMinutes: number;
};

// Custom hook for managing workouts
export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]); // ✅ Properly typed array
  const [showAddForm, setShowAddForm] = useState(false);   // ✅ Destructured correctly

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const newWorkout: Workout = {
      date: formData.get('date') as string,
      calories: parseInt(formData.get('calories') as string),
      durationMinutes: parseInt(formData.get('duration') as string),
    };

    // Add workout to state
    setWorkouts(prev => [...prev, newWorkout]); // ✅ Use callback for safer updates
    setShowAddForm(false);                      // ✅ Call the setter function
    (e.target as HTMLFormElement).reset();

    // Log to console
    console.log("Workout added to database pending approval!");
  };

  return {
    workouts,
    showAddForm,
    setShowAddForm,
    handleAddWorkout
  };
};
