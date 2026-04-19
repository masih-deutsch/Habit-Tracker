import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Overall from './Component/Overall.jsx';
import Adder from './Component/Adder.jsx';
import Card from './Component/Card.jsx';


const examples = [
  { name: "Read a Book", goal: 2, current: 2 },
  { name: "Drink Water", goal: 5, current: 4 },
  { name: "Daily Exercise", goal: 3, current: 0 },
]


export default function App() {

  const [habits, setHabits] = useState(() => (JSON.parse(localStorage.getItem("habits")) || examples))

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])


  function Add(name, goal) {
    if (name !== "") setHabits([...habits, { name: name, goal: goal, current: 0 }])
  }

  function Inc(name) {
    setHabits(habits.map(h => (h.name === name && h.current < h.goal) ? { ...h, current: h.current + 1 } : h))
  }

  function Dec(name) {
    setHabits(habits.map(h => (h.name === name && h.current > 0) ? { ...h, current: h.current - 1 } : h))
  }

  function Remove(name) {
    setHabits(habits.filter(h => h.name !== name))
  }




  return (
    <div className='min-h-screen p-4 md:p-8'>
      <div className='max-w-2xl mx-auto space-y-8'>


        <Overall done={habits.filter(h => h.current === h.goal).length} total={habits.length} />
        <Adder Add={Add} />

        <h2 className="text-slate-500 font-bold text-md px-2 pt-5 uppercase tracking-widest">Today's Habits</h2>

        {habits.map((habit, i) => {
          return (<Card key={i} name={habit.name} goal={habit.goal} current={habit.current} Inc={Inc} Dec={Dec} Remove={Remove} />)
        })}
      </div>

    </div>
  );
}




// function Inc(habitName) {
//   setHabits(habits.map(habit => {
//     if (habit.name === habitName && habit.values[1] < habit.values[0]) {
//       return {
//         ...habit,
//         values: [habit.values[0], habit.values[1] + 1]
//       }
//     } else {
//       return habit
//     }
//   }))
// }