import React, { useEffect, useState } from 'react'
import axios from "axios"

const AllTodos = () => {
    const fetchUserData = async () => {
        const resp = await axios.get('/todo/gettodos')
        console.log(resp)
        if (resp.data.todos.length > 0) {
            setTodos(resp.data.todos)
        }
    }
    // defining the states
    const [todos, setTodos] = useState(null)

    // executes fetchUserData() whenever todos got updated
    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <div className='aside w-[30vw] border-2 border-cyan-200 tracking-wider'>
            <h3 className="text-center text-3xl font-semibold text-cyan-600">TODOS</h3>
            {todos && todos.map((todo) => (
                <div className=" border-0 shadow-gray-400 shadow-xl hover:shadow-cyan-500/50 outline-0 my-2 p-2">
                    <p className="text-center text-xl font-semibold text-cyan-500/50 my-3">{todo.title}</p>
                    <div className="buttons flex justify-evenly flex-row items-center">
                        <button className="bg-cyan-500 shadow-xl hover:shadow-cyan-500/50 text-white p-2 outline-0">Edit</button>
                        <button className="bg-red-600 shadow-xl hover:shadow-red-600/50 text-white p-2 outline-0">Delete</button>
                        <button className="bg-green-500 shadow-xl hover:shadow-green-500/50 text-white p-2 outline-0">Create Task</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllTodos