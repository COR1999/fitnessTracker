import { useWorkouts } from "../hooks/formData.ts"

const AddWorkoutForm = () => { 
  const { showAddForm, setShowAddForm, handleAddWorkout } = useWorkouts();

  return (
    
      <div>
        <div className="center-form">
          <button data-testid="workout-button"
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary">
          {showAddForm ? '✕ Cancel' : '+ Add Workout'}
          </button>
        </div>
        
        {showAddForm && (
            <div className="center-form">
              <div data-testid="workout-form" className="card card-form">
                <h3 className="heading-secondary">Add New Workout</h3>
                <form onSubmit={handleAddWorkout} className="space-y-6">
                  <div>
                    <label className="form-label">Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      required
                      defaultValue={new Date().toISOString().split('T')[0]}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Calories Burned</label>
                    <input 
                      type="number" 
                      name="calories" 
                      placeholder="e.g. 250"
                      required
                      min="1"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Duration (minutes)</label>
                    <input 
                      type="number" 
                      name="duration" 
                      placeholder="e.g. 30"
                      required
                      min="1"
                      className="form-input"
                    />
                  </div>
                  <button data-testid="submit-button"
                    type="submit"
                    className="w-full btn-success">
                    ✅ Add Workout
                  </button>
                </form>
              </div>
            </div>
          )}
      </div>
    )
}

export default AddWorkoutForm