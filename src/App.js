import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoals from './components/NewGoal/NewGoal';
import './app.css'; 

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Lear all about the course topic'},
    {id: 'cg3', text: 'Help other students in the course Q and A'}
  ]);


  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    });
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
    <NewGoals onAddGoal={addNewGoalHandler} />
     <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
