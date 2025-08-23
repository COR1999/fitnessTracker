import { useState } from 'react'


 export const handleAddWorkout = (e: React.FormEvent) => {
    const [workouts, setWorkouts] = useState([])
    const setShowAddForm = useState(false)

    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const newWorkout = {
      date: formData.get('date') as string,
      calories: parseInt(formData.get('calories') as string),
      durationMinutes: parseInt(formData.get('duration') as string),
    }
        // Don't save anywhere, just show success message
    setWorkouts([...workouts, newWorkout])
    setShowAddForm(false)
    ;(e.target as HTMLFormElement).reset()

    // Log to console to show that work out could be added to database
    console.log("Workout added to database pending approval!")
  }
  
