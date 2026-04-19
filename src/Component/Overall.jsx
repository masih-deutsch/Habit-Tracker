export default function Overall({ done, total }) {

    return (
        <header className="bg-rose-300 shadow-2xl rounded-4xl p-6 border border-slate-100 transition-all duration-500 hover:scale-105">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Daily Habit Tracker</h1>
                    <p className="text-slate-500 text-sm mt-1">How close are you to your goals today?</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-left">
                        <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Overall Progress</span>
                        <span className="text-xl font-bold text-blue-600">{done} of {total} Habits</span>
                    </div>
                    <div
                        className="radial-progress text-blue-600 font-bold" style={{ "--value": Math.round((done / total) * 100), "--size": "3.5rem" }} role="progressbar">{Math.round((done / total) * 100)}%
                    </div>
                </div>
            </div>
            <progress className="progress progress-primary w-full mt-4" value={done} max={total}></progress>
        </header>
    )
}