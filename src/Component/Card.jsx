export default function Card({ name, goal, current, Inc, Dec, Remove }) {

    return (
        <>
            {
                (goal !== current) && (current !== 0) &&
                <div className="bg-base-300 shadow-2xl rounded-4xl border border-slate-300 transition-all duration-500 hover:scale-105">
                    <div className="p-5 flex gap-4">
                        <div className="flex-1">
                            <div className="flex items-center relative gap-2">
                                <h3 className="font-bold text-primary text-lg">{name} <span className="loading loading-bars loading-xl"></span></h3>
                                <div className="badge badge-warning badge-sm absolute -right-26 -top-2 font-normal">Goal: {goal}</div>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Completed: {current} of {goal}</p>
                            <progress className="progress progress-info w-full max-w-xs mt-3" value={current} max={goal}></progress>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => { Dec(name) }} className="btn btn-circle btn-sm btn-outline btn-error opacity-50 hover:opacity-100"><i class="fa-solid fa-minus fa-2xl"></i>
                            </button>
                            <span className="text-2xl font-black w-8 text-center text-slate-700">{current}</span>
                            <button onClick={() => { Inc(name) }} className="btn btn-circle btn-sm btn-outline btn-success"><i class="fa-solid fa-plus fa-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            }

            {
                (goal === current) &&
                <div
                    className="bg-success/20 border-2 border-success/30 shadow-2xl rounded-4xl transition-all duration-500 hover:scale-105">
                    <div className="flex p-5 flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-success line-through decoration-success/50 text-lg">{name}
                                </h3>
                                <div className="badge badge-success text-white font-bold border-none">Completed!</div>
                            </div>
                            <p className="text-xs text-success/90 mt-1">100% Goal Achieved</p>
                            <progress className="progress progress-info text-success/30 w-full max-w-xs mt-3" value={goal} max={goal}></progress>
                        </div>
                        <div className="flex items-center gap-3">
                            <i class="text-success fa-solid fa-circle-check fa-2xl"></i>
                            <button className="btn btn-ghost btn-circle btn-md text-slate-400 hover:text-error transition-colors"
                                onClick={() => { Remove(name) }}>
                                <i class="fa-solid fa-trash-can fa-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            }

            {
                (current === 0) &&
                <div className=" bg-indigo-100/60 shadow-2xl rounded-4xl border border-slate-300 transition-all duration-500 hover:scale-105">
                    <div className="flex p-5 flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center relative gap-2">
                                <h3 className="font-bold text-slate-400 text-lg text-opacity-70">{name}</h3>
                                <div className="badge badge-ghost opacity-30 badge-sm absolute -right-26 -top-2 font-normal">Goal: {goal}
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Not started yet</p>
                            <progress className="progress progress-info w-full max-w-xs mt-3" value={0} max={goal}></progress>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="btn btn-circle btn-sm btn-outline btn-error opacity-20 cursor-not-allowed"
                                disabled>-</button>
                            <span className="text-2xl font-black w-8 text-center text-slate-300">0</span>
                            <button onClick={() => { Inc(name) }} className="btn btn-circle btn-sm btn-outline btn-success"><i class="fa-solid fa-plus fa-2xl"></i></button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}