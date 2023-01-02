import React from 'react'
import axios from 'axios'

const AllTasks = ({ tasks, settasks }) => {
    const allTasks = tasks.tasks
    const title = tasks.todoTitle
    const handleDelete = async (e) => {
        const task = e.currentTarget.getAttribute("task")
        const todoid = tasks.todoid;
        await axios.delete(`/todo/task/deletetask${todoid}/${task}`)
        const resp = await axios.get(`/todo/task/getalltasks${todoid}`)
        if (!resp) {
            throw new Error("Todos fetching failed")
        }
        if (resp.data.tasks.length >= 0) {
            settasks(resp.data)
        }
    }
    return (
        <div className='w-[69vw] tracking-wider float-right'>
            <h3 className="text-center text-3xl font-semibold text-cyan-600 my-2">{title}</h3>
            {tasks && allTasks.map((task) => (
                <div key={task} className=" border-0 shadow-gray-400 shadow-xl hover:shadow-cyan-500/50 outline-0 my-2 p-2 w-[50%] h-[110px] mx-auto">
                    <p className="text-center text-xl font-semibold text-cyan-500/50 my-2">{task}</p>
                    <div className="buttons flex justify-evenly flex-row items-center p-2">
                        <div className="buttons flex justify-evenly flex-row items-center">
                            <button onClick={handleDelete} task={task} className="bg-red-600 shadow-xl hover:shadow-red-600/500 text-white p-2 outline-0">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllTasks