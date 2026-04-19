import { useState } from "react"

export default function Adder({ Add }) {

    const [newHabit, setNewHabit] = useState({ name: "", goal: 0, current: 0 })

    return (
        <section className="bg-accent shadow-2xl rounded-4xl border border-slate-100 transition-all duration-500 hover:scale-105">
            <div className="p-6">
                <h2 className="text-slate-700 mb-4 font-bold text-lg">➕ Create New Habit</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                        <input className="input input-bordered w-full bg-slate-200 focus:bg-white focus:border-primary transition-all" onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })} value={newHabit.name} type="text" placeholder="Habit Name (e.g., Drink Water)" />
                    </div>
                    <div className="w-full sm:w-32">
                        <input className="input input-bordered w-full bg-slate-200 focus:bg-white focus:border-primary transition-all"
                            min={0} max={100} onChange={(e) => setNewHabit({ ...newHabit, goal: Number(e.target.value) })}
                            value={newHabit.goal} type="number" placeholder="Goal" />
                    </div>
                    <button className="btn btn-primary px-8 border-slate-100/60"
                        onClick={() => {
                            Add(newHabit.name, newHabit.goal)
                            setNewHabit({ name: "", goal: 0, current: 0 })
                        }} >Add Habit
                    </button>
                </div>
            </div>
        </section>
    )
}