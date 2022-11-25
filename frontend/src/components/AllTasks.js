import React from 'react'

const AllTasks = ({ tasks }) => {
    const allTasks = tasks.tasks
    const title = tasks.todoTitle
    return (
        <div className='w-[69vw] border-2 border-cyan-200 tracking-wider float-right'>
            <h3 className="text-center text-3xl font-semibold text-cyan-600 my-2">{title}</h3>
            {tasks && allTasks.map((task) => (
                <div key={task} className=" border-0 shadow-gray-400 shadow-xl hover:shadow-cyan-500/50 outline-0 my-2 p-2 w-[50%] h-[110px] mx-auto">
                    <p className="text-center text-xl font-semibold text-cyan-500/50 my-2">{task}</p>
                    <div className="buttons flex justify-evenly flex-row items-center p-2">
                        <div className="buttons flex justify-evenly flex-row items-center">
                            <button className="bg-cyan-500 shadow-xl hover:shadow-cyan-500/50 text-white p-2 outline-0">Edit</button>
                        </div>
                        <div className="buttons flex justify-evenly flex-row items-center">
                            <button className="bg-red-600 shadow-xl hover:shadow-red-600/500 text-white p-2 outline-0">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllTasks